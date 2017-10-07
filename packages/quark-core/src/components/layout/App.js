// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'

const App = ({ style, ...unused }) => (
    <View style={[style, styles.container]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App
