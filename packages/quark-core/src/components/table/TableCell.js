// external imports
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const TableCell = ({ style, textStyle, ...unused }) => (
    <View style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default TableCell
