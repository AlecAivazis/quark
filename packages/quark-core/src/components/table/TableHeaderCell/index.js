// @flow
// external imports
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
// local imports
import TableCell from '../TableCell'
import type { TableCellProps } from '../TableCell'

const TableHeaderCell = ({ ...unused }: TableCellProps) => <TableCell {...unused} />

const styles = StyleSheet.create({})

export default TableHeaderCell
