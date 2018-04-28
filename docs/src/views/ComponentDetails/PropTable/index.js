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
    Monospace,
    Text
} from 'quark-web'
// local imports
import styles from './styles'

const PropTable = ({ info, style }) => {
    let content

    // if there are is no prop information
    if (!info.props || Object.keys(info.props).length === 0) {
        content = <Text>No prop information</Text>
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
        // the props we care about
        const props = Object.keys(info.props)
            // sort the props so required ones come first
            .sort((propA, propB) => {
                // if A is required and B isn't
                if (info.props[propA].required && !info.props[propB].required) {
                    // list A first
                    return -1
                }
                // if B is required and A isn't
                if (info.props[propB].required && !info.props[propA].required) {
                    // list A first
                    return 1
                }

                // otherwise sort in alphanumeric order
                return propA > propB
            })

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
                    {props.map((prop, i) => {
                        const propInfo = info.props[prop]

                        return (
                            <TableRow key={prop} last={i === props.length - 1}>
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
