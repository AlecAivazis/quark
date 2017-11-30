// @flow
// external imports
import React from 'react'
import { Text, StyleSheet, TextProperties } from 'react-native'
// local imports
import { GetTheme } from 'quark-core'

const TableHeaderText = ({ style, ...unused }: TextProperties) => (
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
