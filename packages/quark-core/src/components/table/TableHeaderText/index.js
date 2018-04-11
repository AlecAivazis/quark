// @flow
// external imports
import React from 'react'
import { Text, StyleSheet, ViewPropTypes } from 'react-native'
// local imports
import { GetTheme } from 'quark-core'

const TableHeaderText = ({ style, ...unused }: ViewPropTypes) => (
    <GetTheme>
        {({ grey4 }) => <Text style={[styles.container, { color: grey4 }, style]} {...unused} />}
    </GetTheme>
)

const styles = StyleSheet.create({
    container: {
        fontSize: 16
    }
})

export default TableHeaderText
