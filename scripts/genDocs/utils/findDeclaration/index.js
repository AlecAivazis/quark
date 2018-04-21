export default (name, content) =>
    content.find(
        contentNode =>
            (contentNode.type === 'VariableDeclaration' &&
                contentNode.declarations[0].id.name === name) ||
            (contentNode.type === 'ClassDeclaration' && contentNode.id.name === name)
    )
