// local imports
import { parseFile, getPropTable } from '..'
import getPropDef from './getPropDef'

export const DEFAULT_EXPORT = '_default'

const collectExports = filepath => {
    // parse the content of the filepath
    const content = parseFile(filepath)

    // if there are any named exports
    const namedExports = content
        .filter(({ type }) => type === 'ExportNamedDeclaration')
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

    // look for a default export aswell
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

    //
    return {
        components: namedExports.concat(defaultExports).reduce(
            (prev, node) => ({
                ...prev,
                [node.name]: {
                    props: getPropTable(content, node.propDef, null)
                }
            }),
            {}
        )
    }
}

export default collectExports
