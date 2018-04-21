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

    // if there are any named exported components
    const namedExports = content
        .filter(
            ({ type, exportKind }) => type === 'ExportNamedDeclaration' && exportKind === 'value'
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
    const defaultExports = content
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

    // find exported type declarations
    const exportedTypes = content.filter(
        ({ type, exportKind }) => type === 'ExportNamedDeclaration' && exportKind === 'type'
    )

    return {
        components: namedExports.concat(defaultExports).reduce(
            (prev, node) => ({
                ...prev,
                [node.name]: {
                    props: getPropTable(content, node.propDef, importedTypes)
                }
            }),
            {}
        ),
        types: exportedTypes.reduce(
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
    }
}

export default collectExports
