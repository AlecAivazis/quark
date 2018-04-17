// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'
// local imports
import { FlexColumn } from 'quark-web'
import type { FlexViewPropTypes } from 'quark-web'

const App = ({ style, ...unused }: FlexViewPropTypes) => (
    <FlexColumn style={[style, styles.container]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App
