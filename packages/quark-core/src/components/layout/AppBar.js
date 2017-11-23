// @flow
// external imports
import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    ViewProperties
} from 'react-native'
// local imports
import { baseDim, grey2 } from 'quark-core/styles'

const AppBar = ({
    style,
    statusBarStyle,
    onPress,
    ...unused
}: ViewProperties) => <View style={[styles.container, style]} {...unused} />

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
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
