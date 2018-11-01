#! /usr/bin/env node

// external imports
const babel = require('@babel/core')
const fs = require('fs')
const fsExtra = require('fs-extra')
const path = require('path')
const { walk } = require('walk')
const mkdirp = require('mkdirp')
import { promisify } from 'util'
import remove from 'remove'
import _ from 'lodash'
// local imports
const { packageDirs } = require('./filepath')
import { getLocation } from './genDocs/utils'

const _transformFile = promisify(babel.transformFile)

// open up the babel file and read its contents
const transformOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '..', '.babelrc'), 'utf8')
)

// we're going to change some stuff, so make sure we don't use the babelrc
transformOptions.babelrc = false
// make sure we leave import statements alone
transformOptions.env.production.presets[0][1].modules = false

// build every package
Promise.all(packageDirs.map(buildPackage))

async function buildPackage({ sourceDir, buildDir, packageDir }) {
    const mkdir = promisify(mkdirp)
    const readDir = promisify(fs.readdir)
    const rmDir = promisify(remove)

    // readdir throws an except if the path doesn't exist
    try {
        await readDir(buildDir)
        // if we got here, the path does exist, so remove it
        await rmDir(buildDir)
        // the build path doesn't exist so let's move on
    } catch (err) {}

    // make sure the build directory exists
    await mkdir(buildDir)

    // the errors that we have accmulated
    const errors = []

    // walk over every file in the src directory
    walk(sourceDir, {})
        .on('file', async (root, { name }, next) => {
            // the full path of the source file
            const source = path.join(root, name)
            // the full path of the target file
            const target = path.join(buildDir, path.relative(sourceDir, source))

            // ignore test files
            if (!path.basename(target).match(/!(test)\.js/)) {
                next()
            }

            try {
                // the transform configuration to use for web
                const webTransformOptions = _.cloneDeep(transformOptions)
                // references to react-native need to refer to the native/web compat layer
                webTransformOptions.plugins.push('babel-plugin-react-native-web')

                // run babel on the source with the web configuration
                var { code: webCode } = await _transformFile(source, webTransformOptions)
            } catch (err) {
                // collect the error that threw
                errors.push({ path: source, error: err })

                // go onto the next file
                return next()
            }

            // make sure the target directory exists
            await mkdir(path.dirname(target))

            // ignore test files
            if (path.basename(target).match(/test\.js/)) {
                return
            }

            // we always have to build the result of the transformation for web
            const writes = [{ target, code: webCode }]

            if (getLocation(source).package === 'quark-core') {
                // compile the source for native code
                const { code: nativeCode } = await _transformFile(source, transformOptions)

                // build ios and android targets
                writes.push(
                    { target: target.replace('.js', '.ios.js'), code: nativeCode },
                    { target: target.replace('.js', '.android.js'), code: nativeCode }
                )
            }

            for (const { target, code } of writes) {
                // write the resuting code to the file
                fs.writeFile(target, code, (err, data) => {
                    // if something went wrong
                    if (err) {
                        errors.push({ path: source, error: err })
                        throw new Error(err)
                    }

                    // tell the user what we're building
                    console.log(`${source} -> ${target}`)
                })
            }

            // we're done with this file
            next()
        })
        .on('end', () => {
            // if we encountered errors
            if (errors.length > 0) {
                console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                console.log('!!! encountered error while building !!!')
                console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                for (const { path, error } of errors) {
                    console.log(path, error)
                }
            }
            // copy the package.json from the package directory to the build
            const packageJson = path.join(packageDir, 'package.json')
            const buildPackageJson = path.join(buildDir, 'package.json')

            // if the package file has already been copied
            if (fs.existsSync(buildPackageJson)) {
                // remove the file
                fs.unlinkSync(buildPackageJson)
            }

            // copy the new package.json contents over
            fs.createReadStream(packageJson).pipe(fs.createWriteStream(buildPackageJson))
        })
}
