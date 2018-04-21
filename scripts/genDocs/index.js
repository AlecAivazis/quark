// external imports
import path from 'path'
// local imports
import { collectExports } from './utils'

// the directory containing web components
const quarkWeb = path.resolve(
    'packages',
    'quark-web',
    'src',
    'components',
    'layout',
    'App',
    'index.js'
)
const quarkCore = path.resolve('packages', 'quark-core', 'src', 'components', 'index.js')

const run = async () => {
    const { components, types } = await collectExports(quarkCore, {
        alias: {}
    })

    console.log(types.FlexViewPropTypes)
}

run()

process.on('handledRejection', err => {
    console.error(err)
})
