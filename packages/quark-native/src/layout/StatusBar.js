// external imports
import React from 'react'
import { View, StatusBar as NativeBar, StyleSheet, Platform } from 'react-native'

const StatusBar = ({style, ...unused}) => {
    // merge the given style with the default one
    const elementStyle = {...style, ...styles.container}

    console.log(elementStyle)
    // render the native bar
    return (
        <NativeBar {...elementStyle} />
    )
}

// not using StyleSheet here so we can merge the provided backgroundColor with a default and
// figure out which to send to the native element
const styles = {
    container: {
    }
}

export default StatusBar
