// local imports
import { parseFile, getPropTable } from '..'

// extractTypes gets all exported typed in the list of directories
// and returns a map of type to prop table
export default async files => {
    // make sure we look at each directory
    const types = (await Promise.all(files.map(parseFile))).map(_extract)

    return types.reduce(
        (prev, curr) => ({
            ...prev,
            ...curr
        }),
        {}
    )
}

export const _extract = (ast, packageTypes) => {
    // grab the exported type defs
    const types = ast.filter(
        node =>
            node.type === 'ExportNamedDeclaration' &&
            node.declaration &&
            node.declaration.type === 'TypeAlias'
    )

    // join all of the exported types in a single object
    return types.reduce(
        (prev, type) => ({
            ...prev,
            [type.declaration.id.name]: getPropTable(ast, type.declaration.right, packageTypes)
        }),
        {}
    )
}
