#! /usr/bin/env node

// external imports
import { NpmClient } from 'npm-query'
import path from 'path'
import { promisify } from 'util'
import fs from 'fs'
import semver from 'semver'
import { exec } from 'child_process'
// local impors
import { packageDirs } from './filepath'

// publish every package
Promise.all(packageDirs.map(publish))

const npmClient = new NpmClient()

async function publish({ sourceDir, buildDir, packageDir }) {
    // promisify the readfile util
    const readFile = promisify(fs.readFile)

    // read the contents of the package.json to find the package name
    const { name, version } = JSON.parse(
        await readFile(path.join(packageDir, 'package.json'), {
            encoding: 'utf8'
        })
    )

    // get the latest version of the package on the npm registry
    const registryVersion = Object.keys((await npmClient.getModule(name)).versions).reverse()[0]

    // if the current version is greater than the latest
    if (semver.gt(version, registryVersion)) {
        // then we have to publish the local version
        exec(
            'npm publish',
            {
                cwd: buildDir
            },
            (err, stdout, stderr) => {
                // if there is some kind of error
                if (err || stderr) {
                    return console.log(err || stderr)
                }

                // otherwise tell the user what just happened
                console.log(stdout)
            }
        )
    }
}
