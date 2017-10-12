// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { grey3 } from 'quark-core/styles'
import TableRow, { styles as rowStyles } from './TableRow'

const TableHeader = ({ style, ...unused }) => (
    <TableRow style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        borderColor: grey3
    }
})

export default TableHeader
