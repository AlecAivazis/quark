// @flow
// external imports
import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
// local imports
import { baseDim, grey2 } from 'quark-core/styles'
import { FlexRow } from '../FlexRow'
import type { FlexViewPropTypes } from '..'

const AppBar = ({ style, statusBarStyle, onPress, ...unused }: FlexViewPropTypes) => (
    <FlexRow
        justifyContent="flex-start"
        alignItems="center"
        style={[styles.container, style]}
        {...unused}
    />
)

const styles = StyleSheet.create({
    container: {
        height: 16 * baseDim,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: grey2,
        borderStyle: 'solid',
        paddingLeft: 5 * baseDim,
        paddingRight: 5 * baseDim
    }
})

export default AppBar
