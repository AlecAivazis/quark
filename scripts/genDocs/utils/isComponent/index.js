// local imports
import { findDeclaration } from '..'

const isComponent = (declaration, content) => {
    // if its a function declaration
    if (['FunctionDeclaration', 'ArrowFunctionExpression'].includes(declaration.type)) {
        return true
    }

    // if its a variable declaration
    if (declaration.type === 'VariableDeclaration') {
        return Boolean(declaration.declarations[0].init.params)
    }

    // if its a class declaration
    if (declaration.type === 'ClassDeclaration') {
        // grab the extended class
        const { superClass } = declaration

        // make sure it extends React.Component
        return (
            superClass &&
            superClass.object.name === 'React' &&
            superClass.property.name === 'Component'
        )
    }
    // if the declaration refers to an identifier
    if (['Identifier', 'ExportDefaultDeclaration'].includes(declaration.type)) {
        // look for the variable declaration matching the identifier
        return isComponent(findDeclaration(declaration.name, content))
    }

    console.log(declaration)
    // if the declaration is a default one

    return false
}

export default isComponent
