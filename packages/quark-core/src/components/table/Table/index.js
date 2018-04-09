// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'

const Table = ({ style, ...unused }: ViewPropTypes) => (
    <View style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {}
})

export default Table
