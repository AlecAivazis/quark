// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'
// local imports
import { grey2, baseDim } from 'quark-core/styles'
import { GetTheme } from 'quark-core'

export type TableRowProps = ViewPropTypes & {
    last?: boolean
}

const TableRow = ({ style, last, ...unused }: TableRowProps) => (
    <GetTheme>
        {({ grey2 }) => (
            <View
                style={[styles.container, { borderColor: grey2 }, last && styles.last, style]}
                {...unused}
            />
        )}
    </GetTheme>
)

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 2 * baseDim,
        paddingBottom: 2 * baseDim,
        borderBottomWidth: 1,
        height: 40
    },
    last: {
        borderBottomWidth: 0
    }
})

export default TableRow
