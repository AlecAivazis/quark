// external imports
import { parse } from 'babylon'
// local imports
import { getPropTable, parseText } from '..'

export default (content, moduleScopedTypes = {}) => {
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
    const fnDeclaration = content.find(
        node =>
            node.type === 'VariableDeclaration' && node.declarations[0].id.name === componentName
    )
    const classDeclaration = content.find(
        node => node.type === 'ClassDeclaration' && node.id.name === componentName
    )

    // get the type annotation associated with the default export
    const annotation = fnDeclaration
        ? fnDeclaration.declarations[0].init.params[0].typeAnnotation.typeAnnotation
        : classDeclaration.superTypeParameters.params[0]

    return getPropTable(content, annotation, moduleScopedTypes)
}
