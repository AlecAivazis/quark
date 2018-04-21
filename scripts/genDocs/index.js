// external imports
import path from 'path'
// local imports
import { collectExports } from './utils'

// the directory containing web components
const quarkWeb = path.resolve('packages', 'quark-web', 'src', 'components', 'icons', 'index.js')
const quarkCore = path.resolve('packages', 'quark-core', 'src', 'components', 'index.js')

const run = async () => {
    const { components } = await collectExports(quarkCore)

    console.log(components.IconWatch)
}

run()

process.on('unhandledRejection', err => {
    console.error(err)
})
