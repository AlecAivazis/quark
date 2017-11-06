#! /usr/bin/env node

// external imports
const babel = require('babel-core')
const fs = require('fs')
const path = require('path')
const { walk } = require('walk')
const mkdirp = require('mkdirp')

// the directory to build to
const buildDir = '.'
// the source directory
const sourceDir = './src'

// walk over every file in the src directory
walk(sourceDir, {}).on('file', (root, { name }, next) => {
    // the full path of the source file
    const source = `./${path.join(root, name)}`
    // the full path of the target file
    const target = `${buildDir}/${path.relative(sourceDir, source)}`

    // run babel on the source
    babel.transformFile(
        source,
        {
            presets: [
                require.resolve('babel-preset-stage-1'),
                require.resolve('babel-preset-react'),
            ],
            plugins: [
                require.resolve('react-native-web/babel'),
                [
                    require.resolve('babel-plugin-root-import'),
                    {
                        rootPathSuffix: 'src'
                    }
                ]
            ]
        },
        (err, result) => {
            if (err) {
                throw new Error(err)
            }
            // we trasnformed the file so pull out the results
            const { code } = result

            // make sure the target directory exists
            mkdirp(path.dirname(target), err => {
                // if something went wrong
                if (err) {
                    throw new Error(err)
                }

                // write the resuting code to the file
                fs.writeFile(target, code, (err, data) => {
                    // if something went wrong
                    if (err) {
                        throw new Error(err)
                    }

                    // tell the user what we're doing
                    // notify the user we finished
                    console.log(`${source} -> ${target}`)
                })
            })
        }
    )

    // we're done with this file
    next()
})
