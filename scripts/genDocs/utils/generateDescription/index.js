// external imports
import { parse } from 'babylon'
// local imports
import { getPropTable, parseText } from '..'

export default (input, moduleScopedTypes = {}) => {
    // parse the incoming content
    const content = parseText(input)

    // find the default export of the file
    const defaultExport = content.find(node => node.type === 'ExportDefaultDeclaration')

    // if there is no default export
    if (!defaultExport) {
        // yell loudly
        throw new Error('Could not find default export')
    }

    // get the name of the identifier that was exported
    const { name: componentName } = defaultExport.declaration

    // find the variable declaration corresponding to that identifier
    const declaration = content.find(
        node =>
            node.type === 'VariableDeclaration' && node.declarations[0].id.name === componentName
    )

    return {
        props: getPropTable(content, declaration, moduleScopedTypes)
    }
}
