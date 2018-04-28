// @flow
// external imports
import * as React from 'react'
// local imports
import { TableHeaderCell, TableHeaderText, TableCell, TableText } from '../../table'

type Props = {
    isHeader: boolean,
    [key: string]: string
}

export default ({ isHeader, ...unused }: Props) =>
    isHeader ? (
        <TableHeaderCell>
            <TableHeaderText {...unused} />
        </TableHeaderCell>
    ) : (
        <TableCell>
            <TableText {...unused} />
        </TableCell>
    )
