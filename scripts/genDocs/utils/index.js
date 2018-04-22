// external imports
import fs from 'fs'
import { promisify } from 'util'

export getInfo from './getInfo'
export getLocation from './getLocation'
export * from './parse'
export const readDir = promisify(fs.readdir)
export const readFile = promisify(fs.readFile)
