// local imports
import { getPropTable, parseFile } from '..'
import buildGraph from './buildGraph'
import sortGraph from './sortGraph'

// extractTypes gets all exported typed in the list of directories
// and returns a map of type to prop table
export default async files => {
    // build the dependency graph for all files with exported types
    // NOTE: we can identify missing prop definitions by looking at `dependsOn`, it would be
    // [undefined] if it couldn't find the file containing the definition
    const filepaths = (await sortGraph(await buildGraph(files))).map(({ filepath }) => filepath)

    // parse the files in parallel, but merge them in series, building up a list of type defintions
    return (await Promise.all(filepaths.map(parseFile))).reduce((prev, curr) => {
        return {
            ...prev,
            ..._extract(curr, prev)
        }
    }, {})
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
