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
// local imports
const { packageDirs } = require('./filepath')

// open up the babel file and read its contents
const transformOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '..', '.babelrc'), 'utf8')
)
transformOptions.babelrc = false

// build every package
Promise.all(packageDirs.map(buildPackage))

async function buildPackage({ sourceDir, buildDir, packageDir }) {
    const mkdir = promisify(mkdirp)
    const readDir = promisify(fs.readdir)
    const rmDir = promisify(remove)
    // if the build dir exists

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
        .on('file', (root, { name }, next) => {
            // the full path of the source file
            const source = path.join(root, name)
            // the full path of the target file
            const target = path.join(buildDir, path.relative(sourceDir, source))

            // ignore test files
            if (!path.basename(target).match(/!(test)\.js/)) {
                next()
            }

            // run babel on the source
            babel.transformFile(source, transformOptions, async (err, result) => {
                if (err) {
                    errors.push({ path: source, error: err })
                    throw new Error(err)
                }
                // we trasnformed the file so pull out the results
                const { code } = result

                // make sure the target directory exists
                await mkdir(path.dirname(target))

                // ignore test files
                if (path.basename(target).match(/test\.js/)) {
                    return
                }

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
            })

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
