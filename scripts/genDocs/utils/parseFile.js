import { parse } from 'babylon'
import { promisify } from 'util'
import fs from 'fs'

const _readFile = promisify(fs.readFile)

export const parseText = input =>
    parse(input, {
        sourceType: 'module',
        plugins: ['jsx', 'flow', 'exportDefaultFrom', 'classProperties', 'objectRestSpread']
    }).program.body

export const parseFile = async filepath => {
    const data = await _readFile(filepath)
    return parseText(data.toString())
}
