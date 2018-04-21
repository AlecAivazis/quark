// external imports
import path from 'path'
// local imports
import { readFile } from '..'

const resolvePath = async filepath => {
    // try to read the filepath first as a reference to a file
    try {
        // add the javascript extension if necessary
        const path = filepath.endsWith('.js') ? filepath : `${filepath}.js`
        // read the file
        return await readFile(path)
    } catch (err) {}

    try {
        // otherwise treat it like a directory, look for {path}/index.js
        return await readFile(path.join(filepath, 'index.js'))
    } catch {}

    // it could be that we are referencing a file from a non-file looking location
    const { dir, base } = path.parse(filepath)

    return await resolvePath(path.join(dir, '..', base))
}

export default resolvePath
