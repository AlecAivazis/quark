// @flow
// external imports
import React from 'react'
import { Text, StyleSheet, TextProperties } from 'react-native'
// local imports
import { grey4 } from 'quark-core/styles'

const TableHeaderText = ({ style, ...unused }: TextProperties) => (
    <Text style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        fontSize: 16,
        color: grey4
    }
})

export default TableHeaderText
