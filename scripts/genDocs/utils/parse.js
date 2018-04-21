// external imports
import { parse, parseExpression as parseExpr } from 'babylon'
// local imports
import { resolvePath } from '.'

export const parseText = input =>
    parse(input, {
        sourceType: 'module',
        plugins: ['jsx', 'flow', 'exportDefaultFrom', 'classProperties', 'objectRestSpread']
    }).program.body

export const parseFile = async filepath => {
    const data = await resolvePath(filepath)
    try {
        return parseText(data.toString())
    } catch (err) {
        console.log('encountered error while parsing', filepath)

        throw err
    }
}
