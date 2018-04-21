// local imports
import { readFile } from '..'

export default async filepath => {
    // try to read the filepath first as a reference to a file
    try {
        // add the javascript extension if necessary
        const path = filepath.endsWith('.js') ? filepath : `${filepath}.js`
        // read the file
        return await readFile(path)
    } catch (err) {
        // otherwise treat it like a directory, look for {path}/index.js
        return await readFile(`${filepath}/index.js`)
    }
}
