// @flow
// local imports
import { parseFile } from '../parseFile'

// a node in the graph stores the `filepath`, and the paths that must be visited before
type Node = {
    filepath: string,
    dependents: string[]
}

// this function takes a list of files, looks for type depdencies and returns a graph
// representing the type, and types it depends on
export default async (paths: string[]): Node[] => {
    // a mapping of type name, to file that exports it
    const typeMap: { [filepath: string]: string } = {}

    // a mapping of filepath to what it depends on
    const dependentsMap: { [filepath: string]: string[] } = {}

    // parse all of the contents in parrallel and compute what it depends on (the inverted graph)
    const reverseGraph: any[] = (await Promise.all(
        paths.map(async path => {
            // the list of types that this file depends on
            const dependsOn = []
            // parse the contents of the path
            const declarations = [...(await parseFile(path))].filter(
                node =>
                    // if the node is a named export of a type
                    node.type === 'ExportNamedDeclaration' &&
                    node.declaration &&
                    node.declaration.type === 'TypeAlias'
            )
            // if there are no exported types in this file
            if (declarations.length === 0) {
                // don't include this in the graph
                return
            }

            // find any exported types
            for (const { declaration } of declarations) {
                // register the filepath as the place to get information about this type
                typeMap[declaration.id.name] = path

                // check for references to types this declaration depends on

                // if the entry is an intersection or union
                if (declaration.right.types) {
                    // add an entry for each type it depends on
                    dependsOn.push(
                        ...declaration.right.types.filter(type => type.id).map(type => type.id.name)
                    )
                } else if (declaration.right.type === 'GenericTypeAnnotation') {
                    // if the type is an alias
                    dependsOn.push(declaration.right.id.name)
                }
            }
            return {
                filepath: path,
                dependsOn
            }
        })
    )).filter(Boolean)

    // reverse the graph and dereference file locations in parallel
    await Promise.all(
        reverseGraph.map(async ({ filepath, dependsOn }) => {
            // the filepath is a dependent of each of its entries in dependsOn
            for (const path of dependsOn) {
                // so add the filepath to the map
                dependentsMap[path] = !dependentsMap[path]
                    ? [filepath]
                    : [...dependentsMap[path], filepath]
            }
        })
    )

    // invert the graph to get the dependency graph
    return Object.keys(typeMap).map(type => ({
        filepath: typeMap[type],
        dependents: dependentsMap[type] || []
    }))
}
