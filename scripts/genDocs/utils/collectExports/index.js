// external imports
import path from 'path'
// local imports
import { parseFile, getPropTable } from '..'
import getPropDef from './getPropDef'

export const DEFAULT_EXPORT = '_default'

const collectExports = filepath => {
    // parse the content of the filepath
    const content = parseFile(filepath)

    // look for types we have to import
    const importedTypes = content
        .filter(node => node.type === 'ImportDeclaration' && node.importKind === 'type')
        .map(typeImport => {
            // the filepath we import from
            const fp = path.join(path.dirname(filepath), typeImport.source.value)

            // grab the types imported from the file
            const { types } = collectExports(fp)
            // return the types that we needed
            return typeImport.specifiers.reduce(
                (prev, specifier) => ({
                    ...prev,
                    [specifier.imported.name]: types[specifier.imported.name]
                }),
                {}
            )
            // the name of the type we are looking for
            // const typeName =
        })
        .reduce((prev, curr) => ({ ...prev, ...curr }), {})

    // if there are any named type export froms
    const namedTypeExports = content
        .filter(
            ({ type, exportKind, source }) =>
                type === 'ExportNamedDeclaration' && exportKind === 'type' && source
        )
        .map(typeExport => {
            // the filepath we export from
            const fp = path.join(path.dirname(filepath), typeExport.source.value)
            // parse the file we are importing from
            const { types } = collectExports(fp)

            // join all of the exported types in a single object
            return typeExport.specifiers.reduce(
                (prev, specifier) => ({
                    ...prev,
                    [specifier.exported.name]: types[specifier.exported.name]
                }),
                {}
            )
        })
        .reduce((prev, curr) => ({ ...prev, ...curr }), {})

    // if there are any named exported components
    const namedComponentExports = content
        .filter(
            ({ type, exportKind, source }) =>
                type === 'ExportNamedDeclaration' && exportKind === 'value' && !source
        )
        // add their name
        .map(
            ({ declaration: node }) =>
                node.superTypeParameters
                    ? {
                          propDef: getPropDef(node),
                          name: node.id.name
                      }
                    : {
                          propDef: getPropDef(node),
                          name: node.declarations[0].id.name
                      }
        )

    // look for a default exported component aswell
    const exportedComponents = content
        .filter(({ type }) => type === 'ExportDefaultDeclaration')
        .map(node => {
            return {
                name: DEFAULT_EXPORT,
                propDef:
                    // if the declaration is inline
                    node.declaration.type !== 'Identifier'
                        ? // return the prop table from the declaration
                          getPropDef(node.declaration)
                        : // otherwise we have to use the prop definition from a reference in the file
                          getPropDef(
                              content.find(
                                  contentNode =>
                                      (contentNode.type === 'VariableDeclaration' &&
                                          contentNode.declarations[0].id.name ===
                                              node.declaration.name) ||
                                      (contentNode.type === 'ClassDeclaration' &&
                                          contentNode.id.name === node.declaration.name)
                              )
                          )
            }
        })
        .concat(namedComponentExports)
        .reduce(
            (prev, node) => ({
                ...prev,
                [node.name]: {
                    props: getPropTable(content, node.propDef, importedTypes)
                }
            }),
            {}
        )

    // find exported type declarations
    const exportedTypes = content
        .filter(
            ({ type, exportKind, source }) =>
                type === 'ExportNamedDeclaration' && exportKind === 'type' && !source
        )
        .reduce(
            (prev, node) => ({
                ...prev,
                [node.declaration.id.name]: getPropTable(
                    content,
                    node.declaration.right,
                    importedTypes
                )
            }),
            {}
        )

    // look for values we've exported from a particular place
    const exportFromComponents = content
        .filter(
            ({ type, exportKind, source }) =>
                type === 'ExportNamedDeclaration' && exportKind === 'value' && source
        )
        .map(exportFrom => {
            // the filepath we export from
            const fp = path.join(path.dirname(filepath), exportFrom.source.value)
            // parse the file we are importing from
            const { components } = collectExports(fp)

            return exportFrom.specifiers.reduce((prev, specifier) => {
                // the name to look up the component in the imported file
                let name

                // if we are exporting the component as the default of the module
                if (specifier.type === 'ExportDefaultSpecifier') {
                    name = DEFAULT_EXPORT
                } else if (specifier.local.name === 'default') {
                    // if we are renaming the default import in an export
                    // ie export { default as Foo } from 'adf'
                    name = DEFAULT_EXPORT
                } else {
                    name = specifier.exported.name
                }

                // collect all the exported types in a single statement
                return {
                    ...prev,
                    [specifier.exported.name]: components[name]
                }
            }, {})
        })
        .reduce((prev, curr) => ({ ...prev, ...curr }), {})

    return {
        components: {
            ...exportFromComponents,
            ...exportedComponents
        },
        types: {
            ...exportedTypes,
            ...namedTypeExports
        }
    }
}

export default collectExports
