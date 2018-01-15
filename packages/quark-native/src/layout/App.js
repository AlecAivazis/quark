// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'

const App = ({ style, ...unused }: ViewPropTypes) => (
    <View style={[style, styles.container]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App
