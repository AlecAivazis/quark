// external imports
import React from 'react'
import {
    H3,
    FlexColumn,
    Title,
    Table,
    TableHeader,
    TableHeaderCell,
    TableRow,
    TableBody,
    TableCell,
    TableText,
    TableHeaderText
} from 'quark-web'
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
            <Title style={{ fontWeight: '400' }}>
                This component uses the same props as the{' '}
                <a href="https://facebook.github.io/react-native/docs/text.html#props">
                    native Text element.
                </a>
            </Title>
        )
    } else if (info.props === 'ViewPropTypes') {
        // if the component uses the standard view props
        content = (
            <Title style={{ fontWeight: '400' }}>
                This component uses the same props as the{' '}
                <a href="https://facebook.github.io/react-native/docs/view.html#props">
                    native View element.
                </a>
            </Title>
        )
    } else {
        content = (
            <Table style={styles.table}>
                <TableHeader>
                    <TableHeaderCell>
                        <TableHeaderText>Name</TableHeaderText>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <TableHeaderText>Type</TableHeaderText>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <TableHeaderText>Required</TableHeaderText>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <TableHeaderText>Nullable</TableHeaderText>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <TableHeaderText>Description</TableHeaderText>
                    </TableHeaderCell>
                </TableHeader>
                <TableBody>
                    {Object.keys(info.props)
                        .sort()
                        .map(prop => {
                            const propInfo = info.props[prop]

                            return (
                                <TableRow>
                                    <TableCell>
                                        <TableText>{prop}</TableText>
                                    </TableCell>
                                    <TableCell>
                                        <TableText>{propInfo.value}</TableText>
                                    </TableCell>
                                    <TableCell>
                                        <TableText>{JSON.stringify(propInfo.required)}</TableText>
                                    </TableCell>
                                    <TableCell>
                                        <TableText>{JSON.stringify(propInfo.nullable)}</TableText>
                                    </TableCell>
                                    <TableCell>
                                        <TableText>{propInfo.description}</TableText>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                </TableBody>
            </Table>
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
