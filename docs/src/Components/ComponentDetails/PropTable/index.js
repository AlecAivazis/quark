// external imports
import React from 'react'
import { H3, FlexColumn, Title } from 'quark-web'
// local imports
import styles from './styles'

// a map of string props, to a link with more information
// const propLinks = {
//     TextPropTypes: 'https://facebook.github.io/react-native/docs/text.html#props'
// }

const PropTable = ({ info, style }) => {
    let content

    // if there are is no prop information
    if (!info.props || Object.keys(info.props).length === 0) {
        content = 'No prop information'
    } else if (info.props === 'TextPropTypes') {
        // if the props are TextPropTypes
        content = (
            <Title style={{ fontWeight: 400 }}>
                This component uses the same props as the{' '}
                <a href="https://facebook.github.io/react-native/docs/text.html#props">
                    native Text element.
                </a>
            </Title>
        )
    } else if (info.props === 'ViewPropTypes') {
        // if the component uses the standard view props
        content = (
            <Title style={{ fontWeight: 400 }}>
                This component uses the same props as the{' '}
                <a href="https://facebook.github.io/react-native/docs/view.html#props">
                    native View element.
                </a>
            </Title>
        )
    } else {
        content = (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Nullable</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(info.props)
                        .sort()
                        .map(prop => {
                            const propInfo = info.props[prop]

                            return (
                                <tr>
                                    <td>{prop}</td>
                                    <td>{propInfo.value}</td>
                                    <td>{JSON.stringify(propInfo.required)}</td>
                                    <td>{JSON.stringify(propInfo.nullable)}</td>
                                    <td>{propInfo.description}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        )
    }

    return (
        <React.Fragment>
            <H3 style={{ ...styles.header, ...style }}>Props</H3>
            {content}
        </React.Fragment>
    )
}

export default PropTable
