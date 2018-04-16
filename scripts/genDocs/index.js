// external imports
import path from 'path'
import fs from 'fs'
// local imports
import { collectFiles, extractTypes } from './utils'

// the current working directory
const cwd = process.cwd()

export default async (...dirs) => {
    // create a list of files we need to visit
    const files = await collectFiles(dirs.map(dir => path.join(cwd, dir)))

    // create the mapping of exported typed
    const exportedTypes = await extractTypes(files)

    console.log(exportedTypes)
}
