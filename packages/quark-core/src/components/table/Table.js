// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewProperties } from 'react-native'

const Table = ({ style, ...unused }: ViewProperties) => (
    <View style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {}
})

export default Table
