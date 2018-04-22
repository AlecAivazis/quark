// external imports
import path from 'path'
import { collectExports } from '@aaivazis/react-docs'
// local imports
import { getLocation } from './utils'

// the directory containing web components
const quarkWeb = path.resolve('packages', 'quark-web', 'src', 'index.js')
const quarkNative = path.resolve('packages', 'quark-native', 'src', 'index.js')
const quarkCore = path.resolve('packages', 'quark-core', 'src', 'index.js')

// parse the contents of quark-web and quark-native
;(async () => {
    const config = {
        alias: {
            'quark-core': quarkCore
        }
    }

    // grab the web and native lists of components
    const [web, native] = await Promise.all([
        collectExports(quarkWeb, config),
        collectExports(quarkNative, config)
    ])

    // label each component based on where it was exported from

    console.log(web.components.PrimaryButton)
})()

process.on('handledRejection', err => {
    console.error(err)
})
