// external imports
import path from 'path'
// local imports
import { collectExports } from './utils'

// the directory containing web components
const quarkWeb = path.resolve('packages', 'quark-web', 'src', 'index.js')
const quarkCore = path.resolve('packages', 'quark-core', 'src', 'components', 'index.js')

const run = async () => {
    const { components } = await collectExports(quarkWeb, {
        alias: {
            'quark-core': quarkCore
        }
    })

    console.log(components.App)
}

run()

process.on('handledRejection', err => {
    console.error(err)
})
