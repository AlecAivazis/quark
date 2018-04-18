// @flow
// local imports
import { parseFile } from '../parseFile'

// a node in the graph stores the `filepath`, and the paths that must be visited before
type GraphNode = {
    filepath: string,
    dependents: string[],
    dependsOn: string[]
}

// this function takes a list of files, looks for type depdencies and returns a graph
// representing the type, and types it depends on
export default async (paths: string[]): Promise<GraphNode[]> => {
    // a mapping of type name, to file that exports it
    const typeMap: { [filepath: string]: string } = {}
    // a mapping of filepaths to what it depends on
    const dependsOnMap: { [filepath: string]: string[] } = {}

    // parse all of the contents in parrallel and compute what it depends on (the inverted graph)
    await Promise.all(
        paths.map(async path => {
            // the list of types that this file depends on
            let dependsOn = []
            const content = [...(await parseFile(path))]
            // parse the contents of the path
            const exportedDeclarations = content.filter(
                node =>
                    // if the node is a named export of a type
                    node.type === 'ExportNamedDeclaration' &&
                    node.declaration &&
                    node.declaration.type === 'TypeAlias'
            )
            // if there are no exported types in this file
            if (exportedDeclarations.length === 0) {
                // don't include this in the graph
                return
            }

            // find any exported types
            for (const { declaration } of exportedDeclarations) {
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

            // make sure that the dependsOn declaration cannot be found locally
            dependsOn = dependsOn.filter(
                type => !content.find(node => node.type === 'TypeAlias' && node.id.name === type)
            )

            // add the appropriate entry to the depends on map
            dependsOnMap[path] = dependsOn
        })
    )

    // invert the graph to get the dependency graph
    return Object.keys(typeMap).map(type => {
        return {
            filepath: typeMap[type],
            dependsOn: dependsOnMap[typeMap[type]].map(foo => typeMap[foo])
        }
    })
}
