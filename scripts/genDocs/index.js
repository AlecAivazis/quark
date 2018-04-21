// external imports
import path from 'path'
// local imports
import { collectExports } from './utils'

// the directory containing web components
const quarkWeb = path.resolve('packages', 'quark-web', 'src', 'index.js')
const quarkNative = path.resolve('packages', 'quark-native', 'src', 'index.js')
const quarkCore = path.resolve('packages', 'quark-core', 'src', 'index.js')

// parse the contents of quark-web and quark-native
;(async () => {
    const { components } = await collectExports(quarkWeb, {
        alias: {
            'quark-core': quarkCore
        }
    })

    console.log(components.PrimaryButton)
})()

process.on('handledRejection', err => {
    console.error(err)
})
