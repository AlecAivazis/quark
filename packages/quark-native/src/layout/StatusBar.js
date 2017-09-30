// external imports
import React from 'react'
import { View, StatusBar as NativeBar, StyleSheet, Platform } from 'react-native'
// local imports

const StatusBar = ({style, ...unused}) => {
    // merge the given style with the default one
    const elementStyle = {...style, ...styles.container}
    // render the native bar
    return (
        <View style={elementStyle}>
            <NativeBar backgroundColor="blue" {...unused} />
        </View>
    )
}

// not using StyleSheet here so we can merge the provided backgroundColor with a default and
// figure out which to send to the native element
const styles = {
    container: {
    }
}

export default StatusBar
