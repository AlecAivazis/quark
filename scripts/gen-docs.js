// local imports
import genDocs from './genDocs'

genDocs(
    'packages/quark-web/src/components',
    'packages/quark-core/src/components',
    'packages/quark-native/src/components'
)

process.on('unhandledRejection', err => {
    console.error(err)
})
