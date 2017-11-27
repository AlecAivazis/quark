// @flow
// external imports
import React from 'react'
import { View, StyleSheet, Text, ViewProperties } from 'react-native'

export type TableCellProps = ViewProperties

const TableCell = ({ style, ...unused }: TableCellProps) => (
    <View style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default TableCell
