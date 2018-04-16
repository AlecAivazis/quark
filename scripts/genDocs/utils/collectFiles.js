import { walk } from 'walk'
import path from 'path'

// generate a flat list of all of the files
const _findDirs = dir =>
    new Promise((resolve, reject) => {
        const files = []
        // Walker options
        const walker = walk(dir, { followLinks: false })

        walker.on('file', function(root, stat, next) {
            // the fully qualified filepath
            const filepath = path.join(root, stat.name)

            // if the file is not a test or snapshot
            if (!(/test.js/.test(filepath) || /.snap/.test(filepath))) {
                // add the filepath to the list of files
                files.push(filepath)
            }
            next()
        })

        walker.on('end', function() {
            resolve(files)
        })
    })

export default async dirs =>
    (await Promise.all(dirs.map(_findDirs))).reduce((prev, curr) => prev.concat(curr), [])
