export default node => {
    // if we are looking at a class
    if (node.type === 'ClassDeclaration') {
        return node.superTypeParameters.params[0]
    }
    // if we are looking at a variable declaration
    if (node.type === 'VariableDeclaration') {
        return node.declarations[0].init.params[0].typeAnnotation.typeAnnotation
    }
    // if we are looking at an inline function
    return node.params[0].typeAnnotation.typeAnnotation
}
