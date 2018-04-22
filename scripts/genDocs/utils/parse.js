// external imports
import { parse } from 'babylon'
// local imports
import { resolvePath, readFile } from '.'

export const parseText = input =>
    parse(input, {
        sourceType: 'module',
        plugins: [
            'jsx',
            'flow',
            'exportDefaultFrom',
            'classProperties',
            'objectRestSpread',
            'exportNamespaceFrom'
        ]
    }).program.body

export const parseFile = async filepath => {
    const data = await readFile(filepath)
    console.log(data)
    try {
        return parseText(data.toString())
    } catch (err) {
        console.log('encountered error while parsing', filepath)

        throw err
    }
}
