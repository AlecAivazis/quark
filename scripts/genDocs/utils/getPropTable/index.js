// local imports
import prettyPrintType from './prettyPrintType'

const getPropTable = (content, declaration, moduleScopedTypes = {}) => {
    // get the prop types for that declaration
    const typeAnnotation = declaration.declarations
        ? declaration.declarations[0].init.params[0].typeAnnotation.typeAnnotation
        : declaration
    // the definition of the type
    let typeDef

    // if it is a reference to type annotation defined in the file
    if (typeAnnotation.type === 'GenericTypeAnnotation') {
        // get the name of the type
        const typeName = typeAnnotation.id.name

        // find the type def of the corresponding name
        typeDef = content.find(node => node.type === 'TypeAlias' && node.id.name === typeName)

        // if we couldn't find the type definition, it is an externally imported type
        if (!typeDef) {
            // we don't support
            // throw new Error(`Could not find definition for declaration: ${typeName}`)
            return moduleScopedTypes[typeName] || {}
        }

        // use the defined value as the typedef
        typeDef = typeDef.right
    } else {
        // otherwise it is an inline definition
        typeDef = typeAnnotation
    }
    // if we have a single list of properties (an object)
    if (typeDef.properties) {
        return _generateTable(typeDef.properties, moduleScopedTypes)
    }
    // if its a standalone type or union
    if (!typeDef.types || typeDef.type === 'UnionTypeAnnotation') {
        // generate the prop table like normal
        return prettyPrintType(typeDef)
    }

    // otherwise we are most likely an intersection of other types so return a merge of all of the tables
    return typeDef.types.map(type => getPropTable(content, type, moduleScopedTypes)).reduce(
        (prev, curr) => ({
            ...prev,
            ...curr
        }),
        {}
    )
}

const _generateTable = properties => {
    // the props of the declaration
    const props = {}

    // for each prop in the definition
    for (const prop of properties) {
        // check if the type is nullable
        const isNullable = prop.value.type === 'NullableTypeAnnotation'

        // set the value to the prittified version
        props[prop.key.name] = {
            value: prettyPrintType(!isNullable ? prop.value : prop.value.typeAnnotation),
            optional: prop.optional,
            nullable: isNullable
        }
    }

    // return the generated prop table
    return props
}

export default getPropTable
