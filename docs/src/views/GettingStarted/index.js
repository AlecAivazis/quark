// external imports
import React from 'react'
// local imports
import { FlexColumn } from 'quark-web'
import { Title, Description } from '../../components'

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
            To get started, install the version of quark that matches your application by running
            `npm i quark-web` or `npm i quark-native`.
        </Description>
        <Description>
            Please keep in mind that since quark is meant to work on both native and web, the rules
            for available style values is slightly different. For example, you cannot pass text
            styling to a non text-based component.
        </Description>
    </FlexColumn>
)

export default GettingStarted
