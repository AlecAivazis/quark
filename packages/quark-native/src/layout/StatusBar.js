// external imports
import React from 'react'
import { View, StatusBar as NativeBar, StyleSheet, Platform } from 'react-native'

const StatusBar = ({style, ...unused}) => {
    console.log(style)
    // render the native bar
    return <NativeBar {...{...style, ...styles.container}} />
}

// not using StyleSheet here so we can merge the provided backgroundColor with a default and
// figure out which to send to the native element
const styles = {
    container: {
    }
}

export default StatusBar
