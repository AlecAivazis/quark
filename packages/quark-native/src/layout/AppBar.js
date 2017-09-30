// external imports
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
// local imports
import { StatusBar } from '.'
import { baseDim, grey2 } from 'quark-core/styles'

const AppBar = ({style, statusBarStyle, ...unused}) => (
    <View style={styles.container}>
        <StatusBar style={statusBarStyle}/>
        <View style={[styles.content, style]} {...unused}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: grey2,
        borderStyle: 'solid',
    },
    content: {
        display: 'flex',
        height: 16 * baseDim,
        paddingLeft: 5 * baseDim,
        paddingRight: 5 * baseDim,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
})

export default AppBar
