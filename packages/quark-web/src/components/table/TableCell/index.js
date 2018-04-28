// @flow
// external imports
import React from 'react'
import { ViewPropTypes } from 'react-native'

export type TableCellProps = ViewPropTypes

const TableCell = ({ style, ...unused }: TableCellProps) => (
    <td style={{ ...styles.container, ...style }} {...unused} />
)

const styles = {
    container: {
        verticalAlign: 'middle'
    }
}

export default TableCell
