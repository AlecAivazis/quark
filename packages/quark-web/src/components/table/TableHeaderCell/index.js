// @flow
// external imports
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
// local imports
import TableCell from '../TableCell'
import type { TableCellProps } from '../TableCell'

const TableHeaderCell = ({ style, ...unused }: TableCellProps) => (
    <th style={{ ...styles.container, ...style }} {...unused} />
)

const styles = {
    container: {
        textAlign: 'left',
        verticalAlign: 'middle',
        height: 32
    }
}

export default TableHeaderCell
