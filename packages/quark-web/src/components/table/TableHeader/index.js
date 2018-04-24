// @flow
// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { GetTheme } from 'quark-core'
import TableRow, { styles as rowStyles } from '../TableRow'
import type { TableRowProps } from '../TableRow'

const TableHeader = ({ style, ...unused }: TableRowProps) => (
    <GetTheme>
        {({ grey5 }) => (
            <thead style={{ ...styles.container, borderColor: grey5, ...style }}>
                <tr style={styles.tr} {...unused} />
            </thead>
        )}
    </GetTheme>
)

const styles = {
    container: {
        borderBottom: '3px solid'
    }
}

export default TableHeader
