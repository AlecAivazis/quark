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
                        <TableHeaderText style={styles.headerText}>Name</TableHeaderText>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <TableHeaderText style={styles.headerText}>Type</TableHeaderText>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <TableHeaderText style={styles.headerText}>Required</TableHeaderText>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <TableHeaderText style={styles.headerText}>Nullable</TableHeaderText>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <TableHeaderText style={styles.headerText}>Description</TableHeaderText>
                    </TableHeaderCell>
                </TableHeader>
                <TableBody>
                    {Object.keys(info.props)
                        .sort()
                        .map(prop => {
                            const propInfo = info.props[prop]

                            return (
                                <TableRow key={prop}>
                                    <TableCell>
                                        <TableText style={styles.tableText}>{prop}</TableText>
                                    </TableCell>
                                    <TableCell>
                                        <TableText style={styles.tableText}>
                                            {propInfo.value.replace('=>', '⇒')}
                                        </TableText>
                                    </TableCell>
                                    <TableCell>
                                        <TableText style={styles.tableText}>
                                            {JSON.stringify(propInfo.required)}
                                        </TableText>
                                    </TableCell>
                                    <TableCell>
                                        <TableText style={styles.tableText}>
                                            {JSON.stringify(propInfo.nullable)}
                                        </TableText>
                                    </TableCell>
                                    <TableCell>
                                        <TableText style={styles.tableText}>
                                            {propInfo.description}
                                        </TableText>
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
