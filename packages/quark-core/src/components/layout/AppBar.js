// external imports
import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
// local imports
import { baseDim, grey2 } from 'quark-core/styles'

const AppBar = ({style, statusBarStyle, onPress, ...unused}) => {
    // the bar component
    const view = <View style={[styles.container, style]} {...unused}/>

    // if we have a press handler wrap the content in one
    return onPress ? <TouchableWithoutFeedback onPress={onPress}>{view}</TouchableWithoutFeedback> :view
}

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
        paddingRight: 5 * baseDim,
    },
})

export default AppBar
