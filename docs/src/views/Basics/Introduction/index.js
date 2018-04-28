// external imports
import React from 'react'
// local imports
import { FlexColumn } from 'quark-web'
import { Title, Description } from 'src/components'

const GettingStarted = () => (
    <FlexColumn>
        <Title>Welcome to Quark! 🎉</Title>
        <Description textStyle={{ marginBottom: 0 }}>
            Quark is a component library designed to be used in both `React` and `ReactNative` in
            order to provide one single vocabulary for building interfaces. Along with common visual
            components, it also has powerful state management components, useful for quickly
            building complex state in a composable manner.
        </Description>
        <Description textStyle={{ marginBottom: 0 }}>
            To get started, please read the `Getting Started` guide on the left. The components
            under the `Components` section can be used in either `quark-native` or `quark-core`,
            unless the component is specifically tagged for one or the either.
        </Description>
    </FlexColumn>
)

export default GettingStarted
