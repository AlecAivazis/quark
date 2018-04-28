// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'

const Table = ({ style, ...unused }: ViewPropTypes) => (
    <tbody style={{ ...styles.container, ...style }} {...unused} />
)

const styles = {
    container: {}
}

export default Table
