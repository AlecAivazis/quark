// external imports
import _ from 'lodash'
// local imports
import { getLocation, getInfo } from '..'

export default async (args, { ignoreSections = [] } = {}) => {
    // one list of components to rule them all with their name as a field
    const components = args.reduce(
        (acc, componentObject) =>
            acc.concat(
                Object.keys(componentObject).map(componentName => ({
                    name: componentName,
                    ...componentObject[componentName]
                }))
            ),
        []
    )

    // the first thing we have to do is tag the components appropriately and compare prop tables
    const { data, errors } = components.reduce(
        (prev, component) => {
            // figure out the section of the component based on its path
            const { package: pkg, section } = getLocation(component.filepath)

            // the tags we need to assign to the component
            let tags = [pkg]

            // the new list of errors
            let newErrors = []

            // if we already have information about the component
            if (prev.data[section] && prev.data[section][component.name]) {
                // make sure the props are the same
                if (!_.isEqual(prev.data[section][component.name].props, component.props)) {
                    newErrors.push(`Encountered discrepancy in prop tables for ${component.name}`)
                }
                // add the previous tags to the list
                tags.push(...prev.data[section][component.name].tags)
            }

            // if we have tagged the component for every package
            if (tags.length === args.length) {
                tags = []
            }

            return {
                errors: [...prev.errors, ...newErrors],
                data: {
                    ...prev.data,
                    [section]: {
                        ...prev.data[section],
                        [component.name]: {
                            ...component,
                            props: component.props,
                            tags
                        }
                    }
                }
            }
        },
        { data: {}, errors: [] }
    )
    // if we are supposed to ignore a section
    for (const section of ignoreSections) {
        Reflect.deleteProperty(data, section)
    }

    // add the info of each component
    for (const section of Object.keys(data)) {
        for (const component of Object.keys(data[section])) {
            // collect the info
            try {
                const info = await getInfo({ section, component })
                // assign the info associated with the component
                Object.assign(data[section][component], info)
            } catch (err) {
                // if something went wrong, add the error to the list
                errors.push(err.message)
            }
        }
    }

    return { data, errors }
}
