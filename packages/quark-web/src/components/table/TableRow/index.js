// @flow
// external imports
import React from 'react'
import { StyleSheet, ViewPropTypes } from 'react-native'
// local imports
import { grey2, baseDim } from 'quark-core/styles'
import { GetTheme } from 'quark-core'

export type TableRowProps = ViewPropTypes & {
    last?: boolean
}

const TableRow = ({ style, last, ...unused }: TableRowProps) => (
    <GetTheme>
        {({ grey2 }) => (
            <tr
                style={{
                    ...styles.container,
                    ...(last && styles.last),
                    ...style
                }}
                {...unused}
            />
        )}
    </GetTheme>
)

export const styles = {
    container: {
        paddingTop: 2 * baseDim,
        paddingBottom: 2 * baseDim,
        borderBottom: `1px solid ${grey2}`,
        height: 40
    },
    last: {
        borderBottom: 0
    }
}

export default TableRow
