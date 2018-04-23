// external imports
import path from 'path'
import chalk from 'chalk'
import { collectExports } from '@aaivazis/react-docs'
// local imports
import { getLocation, getInfo, organizeComponents, writeFile } from './utils'
import * as quarkPaths from '../filepath'

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

    // remove the components we want to hide
    for (const component of [
        'BaseButton',
        'Button',
        'BaseButtonWithText',
        'updateList',
        'triggerAlert'
    ]) {
        Reflect.deleteProperty(web.components, component)
        Reflect.deleteProperty(native.components, component)
    }

    // organize into sections with tags, description, and examples
    const { data: componentData, errors } = await organizeComponents(
        [web.components, native.components],
        {
            ignoreSections: ['icons']
        }
    )

    // massage the section objects into a list we will use in the ui
    const uiData = Object.keys(componentData)
        .sort()
        .map(section => ({
            name: section,
            components: Object.keys(componentData[section])
                .sort()
                .map(component => ({
                    name: component,
                    ...componentData[section][component]
                }))
        }))

    // if there were any errors
    if (errors.length > 0) {
        // tell the user
        console.log(chalk.red(errors.join('\n')))
    }

    // write the result to the ui directory
    const file = 'data.json'
    await writeFile(path.join(quarkPaths.docs, file), JSON.stringify(uiData, null, ''))

    // log some basic stats
    const numOfSections = uiData.length
    const numOfComponents = uiData.reduce((acc, curr) => acc + curr.components.length, 0)
    console.log(
        chalk.green(`Found ${numOfSections} sections with ${numOfComponents} total components`)
    )
})()

process.on('handledRejection', err => {
    console.error(err)
})
