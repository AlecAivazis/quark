// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'
// local imports
import { FlexColumn } from 'quark-core'
import type { FlexViewPropTypes } from 'quark-core'

const App = ({ style, ...unused }: FlexViewPropTypes) => (
    <FlexColumn style={[style, styles.container]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App
