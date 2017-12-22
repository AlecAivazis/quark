#! /usr/bin/env node

// external imports
const babel = require('@babel/core')
const fs = require('fs')
const fsExtra = require('fs-extra')
const path = require('path')
const { walk } = require('walk')
const mkdirp = require('mkdirp')

// the directory to build to inside of the packages
const buildDir = 'build'
// the package directory
const packageDir = 'packages'
// the directory within the package with the source
const src = 'src'

// open up the babel file and read its contents
const transformOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '..', '.babelrc'), 'utf8')
)
transformOptions.babelrc = false

function run() {
    return Promise.all([
        buildPackage('quark-native'),
        buildPackage('quark-core'),
        buildPackage('quark-web')
    ])
}

async function buildPackage(name) {
    // the source module we're building
    const sourceDir = path.join(packageDir, name, src)
    const targetDir = path.join(packageDir, name, buildDir)

    // make sure the build directory exists
    await mkdir(targetDir)

    // walk over every file in the src directory
    walk(sourceDir, {})
        .on('file', (root, { name }, next) => {
            // the full path of the source file
            const source = path.join(root, name)
            // the full path of the target file
            const target = path.join(targetDir, path.relative(sourceDir, source))

            // ignore test files
            if (!path.basename(target).match(/!(test)\.js/)) {
                next()
            }

            // run babel on the source
            babel.transformFile(source, transformOptions, async (err, result) => {
                if (err) {
                    throw new Error(err)
                }
                // we trasnformed the file so pull out the results
                const { code } = result

                // make sure the target directory exists
                await mkdir(path.dirname(target))

                // if something went wrong
                if (err) {
                    throw new Error(err)
                }

                // ignore test files
                if (path.basename(target).match(/test\.js/)) {
                    return
                }

                // write the resuting code to the file
                fs.writeFile(target, code, (err, data) => {
                    // if something went wrong
                    if (err) {
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
            // copy the package.json from the package directory to the build
            const packageJson = path.join(path.join(packageDir, name), 'package.json')
            const buildPackageJson = path.join(targetDir, 'package.json')

            // if the package file has already been copied
            if (fs.existsSync(buildPackageJson)) {
                // remove the file
                fs.unlinkSync(buildPackageJson)
            }

            // copy the new package.json contents over
            fs.createReadStream(packageJson).pipe(fs.createWriteStream(buildPackageJson))
        })
}

const mkdir = path =>
    new Promise((resolve, reject) =>
        mkdirp(path, err => {
            if (err) return reject(err)
            resolve()
        })
    )

run()
