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
    TableHeaderText,
    IconCheck,
    Monospace
} from 'quark-web'
// local imports
import styles from './styles'

console.log(IconCheck)

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
                        <TableHeaderText style={styles.headerText}>Required</TableHeaderText>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <TableHeaderText style={styles.headerText}>Nullable</TableHeaderText>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <TableHeaderText style={styles.headerText}>Type</TableHeaderText>
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
                                        <TableText style={styles.iconTableText}>
                                            {propInfo.required && <IconCheck style={styles.icon} />}
                                        </TableText>
                                    </TableCell>
                                    <TableCell>
                                        <TableText style={styles.iconTableText}>
                                            {propInfo.nullable && <IconCheck style={styles.icon} />}
                                        </TableText>
                                    </TableCell>
                                    <TableCell>
                                        <Monospace style={styles.tableText}>
                                            {propInfo.value.replace('=>', '⇒')}
                                        </Monospace>
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
