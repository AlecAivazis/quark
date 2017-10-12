// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { grey2, baseDim } from 'quark-core/styles'

const TableRow = ({ style, last, ...unused }) => (
    <View style={[styles.container, last && styles.last, style]} {...unused} />
)

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 2 * baseDim,
        paddingBottom: 2 * baseDim,
        borderBottomWidth: 1,
        borderColor: grey2,
        height: 40
    },
    last: {
        borderBottomWidth: 0
    }
})

export default TableRow
