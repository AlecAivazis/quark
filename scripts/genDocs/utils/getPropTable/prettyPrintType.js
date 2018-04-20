const prettyPrint = typeDefinition => {
    // if the type is an identifier we don't know about
    if (
        typeDefinition.type === 'GenericTypeAnnotation' &&
        typeDefinition.id.type === 'Identifier'
    ) {
        return _identifier(typeDefinition)
    }
    // if the type is a function
    if (typeDefinition.type === 'FunctionTypeAnnotation') {
        return _function(typeDefinition)
    }
    // void types
    if (typeDefinition.type === 'VoidTypeAnnotation') {
        return 'void'
    }
    // string types
    if (typeDefinition.type === 'StringTypeAnnotation') {
        return 'string'
    }
    // boolean
    if (typeDefinition.type === 'BooleanTypeAnnotation') {
        return 'boolean'
    }
    // number
    if (typeDefinition.type === 'NumberTypeAnnotation') {
        return 'number'
    }
    // any type
    if (typeDefinition.type === 'AnyTypeAnnotation') {
        return 'any'
    }
    // qualified types (ie, React.Element)
    if (typeDefinition.id && typeDefinition.id.type === 'QualifiedTypeIdentifier') {
        return _qualified(typeDefinition)
    }
    // object types
    if (typeDefinition.type === 'ObjectTypeAnnotation') {
        return _object(typeDefinition)
    }
    // identifier
    if (typeDefinition.type === 'Identifier') {
        return typeDefinition.name
    }
    // nullable types
    if (typeDefinition.type === 'NullableTypeAnnotation') {
        return `?${prettyPrint(typeDefinition.typeAnnotation)}`
    }
    // literal type
    if (typeDefinition.type.endsWith('LiteralTypeAnnotation')) {
        return JSON.stringify(typeDefinition.value)
    }
    // union types
    if (typeDefinition.type === 'UnionTypeAnnotation') {
        return _union(typeDefinition)
    }
    // array types
    if (typeDefinition.type === 'ArrayTypeAnnotation') {
        return `Array<${prettyPrint(typeDefinition.elementType)}>`
    }

    // otherwise its a type we don't know about, yell loudly
    throw new Error(`Unkown type: ${typeDefinition.type}`)
}

const _function = node => {
    // pretty print the input signature
    const inputs = node.params.map(node => prettyPrint(node.typeAnnotation))
    const signature = `(${inputs.join(', ')})`

    // pretty print the return type
    const returnType = prettyPrint(node.returnType)

    // return the full signature
    return `${signature} => ${returnType}`
}

const _qualified = node => {
    // the type string
    let type = ''
    // if the id is qualified
    if (node.id.type === 'QualifiedTypeIdentifier') {
        // add the qualifacation
        type += `${node.id.qualification.name}.`
    }

    // add the type identifier
    type += node.id.id.name

    // if there are type parameters to address (ie, React.Element<any>)
    if (node.typeParameters) {
        // add a prettified type paramter list to the string
        type += _typeParameters(node.typeParameters)
    }

    return type
}

const _identifier = type => {
    let string = type.id.name
    // it could be a generic type
    if (type.typeParameters) {
        // add the type parameter string
        string += _typeParameters(type.typeParameters)
    }

    return string
}

const _typeParameters = ({ params }) => `<${params.map(prettyPrint).join(', ')}>`

const _object = type => {
    // key value pairs for each entry
    const params = []

    // for each paramter of the object
    for (const param of type.properties) {
        // add the string representation of the keys
        params.push(`${prettyPrint(param.key)}: ${prettyPrint(param.value)}`)
    }

    // if there are indexers (they came after properties)
    for (const param of type.indexers) {
        // they are of the form [k: string]: string
        params.push(`[${param.id.name}: ${prettyPrint(param.key)}]: ${prettyPrint(param.value)}`)
    }

    return params.length > 0 ? `{ ${params.join(', \n')} }` : '{}'
}

const _union = node => node.types.map(prettyPrint).join(' | ')

export default prettyPrint
