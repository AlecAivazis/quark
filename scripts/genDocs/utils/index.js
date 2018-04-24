// external imports
import fs from 'fs'
import { promisify } from 'util'

export getInfo from './getInfo'
export getLocation from './getLocation'
export organizeComponents from './organizeComponents'
export * from './parse'
export const readDir = promisify(fs.readdir)
export const readFile = promisify(fs.readFile)
export const writeFile = promisify(fs.writeFile)
