// @flow
// external imports
import React from 'react'
import { Text, StyleSheet, TextPropTypes } from 'react-native'
// local imports
import { GetTheme } from 'quark-core'

const TableText = ({ style, ...unused }: TextPropTypes) => (
    <GetTheme>
        {({ grey5 }) => <Text style={[styles.container, { color: grey5 }, style]} {...unused} />}
    </GetTheme>
)

const styles = StyleSheet.create({
    container: {
        fontSize: 14
    }
})

export default TableText
