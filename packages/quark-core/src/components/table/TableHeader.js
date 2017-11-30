// @flow
// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { GetTheme } from 'quark-core'
import TableRow, { styles as rowStyles } from './TableRow'
import type { TableRowProps } from './TableRow'

const TableHeader = ({ style, ...unused }: TableRowProps) => (
    <GetTheme>
        {({ grey3 }) => (
            <TableRow style={[styles.container, { borderColor: grey3 }, style]} {...unused} />
        )}
    </GetTheme>
)

const styles = StyleSheet.create({
    container: {}
})

export default TableHeader
