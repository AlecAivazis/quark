// @flow
// external imports
import React from 'react'
import { View, StyleSheet, Text, ViewPropTypes } from 'react-native'

export type TableCellProps = ViewPropTypes

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
