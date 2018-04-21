// external imports
import { promisify } from 'util'
import fs from 'fs'

export * from './parse'
export collectExports from './collectExports'
export getPropTable from './getPropTable'
export getLocation from './getLocation'
export const readFile = promisify(fs.readFile)
