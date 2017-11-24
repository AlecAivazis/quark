// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewProperties } from 'react-native'

const App = ({ style, ...unused }: ViewProperties) => <View style={[style, styles.container]} {...unused} />

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App
