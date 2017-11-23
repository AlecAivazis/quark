// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewProperties } from 'react-native'
// local imports
import { grey2, baseDim } from 'quark-core/styles'

export type TableRowProps = ViewProperties & {
    last?: boolean
}

const TableRow = ({ style, last, ...unused }: TableRowProps) => (
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
