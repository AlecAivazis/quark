// @flow
// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
import type { ViewPropTypes } from 'react-native-web'

const App = ({ style, ...unused }: ViewPropTypes) => (
    <View style={[style, styles.container]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'auto'
    }
})

export default App
