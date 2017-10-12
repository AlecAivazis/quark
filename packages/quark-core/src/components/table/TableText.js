// external imports
import React from 'react'
import { Text, StyleSheet } from 'react-native'
// local imports
import { grey5 } from 'quark-core/styles'

const TableText = ({ style, ...unused }) => (
    <Text style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        fontSize: 14,
        color: grey5
    }
})

export default TableText
