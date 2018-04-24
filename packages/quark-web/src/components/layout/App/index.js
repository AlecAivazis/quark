// @flow
// external imports
import React from 'react'
import { View } from 'react-native'
// local imports
import { FlexColumn } from 'quark-web'
import type { FlexViewPropTypes } from 'quark-core'

const App = ({ style, ...unused }: FlexViewPropTypes) => (
    <FlexColumn style={{ ...styles.container, ...style }} {...unused} />
)

const styles = {
    container: {
        overflow: 'auto',
        minHeight: '100vh'
    }
}

export default App
