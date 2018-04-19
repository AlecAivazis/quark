// @flow
import type { GraphNode } from './buildGraph'

// a node has the form
//   {
//       filepath: string,
//       dependsOn: string[],
//   }
//

// this function performs a topological sort over the incoming graph (structure shown above)
// in order to provide a order to parse the contents for type information to build up the
// set of fully defined exported types
export default (graph: GraphNode[]) => {
    // compute the number of inDegress for every node in the graph
    const allNodes = graph.map(node => ({
        ...node,
        inDegree: node.dependsOn.length
    }))

    // the enventually sorted list of nodes
    const list = []

    // the list of nodes we are considering at the start
    // starts with all nodes whose inDegree (the number of incoming vertices) is zero
    const adjacent = allNodes.filter(node => node.inDegree === 0)

    // until we have encountered all of the adjacent entries
    for (const target of adjacent) {
        // add the target to the sorted list
        // note: things that depend on target will come after in adjacent
        list.push(target)

        // since we added `target` to our sorted list, we can decrement the inDegree of all nodes by 1
        for (const node of allNodes) {
            // decrement each inDegree
            node.inDegree--

            // if we removed the last element it needed to be considered valid to put in
            if (node.inDegree === 0) {
                // add it to the list of adjacent nodes
                adjacent.push(node)
            }
        }
    }

    return list
}
