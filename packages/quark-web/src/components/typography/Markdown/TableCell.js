// @flow
// external imports
import * as React from 'react'
// local imports
import { TableHeaderCell, TableHeaderText, TableCell, TableText } from '../../table'

export default ({ isHeader, ...unused }) =>
    isHeader ? (
        <TableHeaderCell>
            <TableHeaderText {...unused} />
        </TableHeaderCell>
    ) : (
        <TableCell>
            <TableText {...unused} />
        </TableCell>
    )
