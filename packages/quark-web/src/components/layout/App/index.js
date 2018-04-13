// @flow
// external imports
import React from 'react'
import { View } from 'react-native'
import type { ViewPropTypes } from 'react-native-web'
// local imports
import { FlexColumn, FlexViewProps } from 'quark-web'
import type { FlexViewPropTypes } from 'quark-web'

const App = ({ style, ...unused }: FlexViewPropTypes) => (
    <FlexColumn style={{ ...styles.container, style }} {...unused} />
)

const styles = {
    container: {
        flex: 1,
        overflow: 'auto',
        minHeight: '100vh'
    }
}

export default App
