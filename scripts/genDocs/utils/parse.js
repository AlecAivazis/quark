import { parse, parseExpression as parseExpr } from 'babylon'
import { promisify } from 'util'
import fs from 'fs'

const _readFile = promisify(fs.readFile)

// the plugins to pass to babylon
const plugins = ['jsx', 'flow', 'exportDefaultFrom', 'classProperties', 'objectRestSpread']

export const parseText = input =>
    parse(input, {
        sourceType: 'module',
        plugins
    }).program.body

export const parseExpression = input =>
    parseExpr(input, {
        sourceType: 'module',
        plugins
    })

export const parseFile = async filepath => {
    const data = await _readFile(filepath)
    return parseText(data.toString())
}
