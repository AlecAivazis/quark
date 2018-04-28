// external imports
import React from 'react'
// local imports
import { FlexColumn } from 'quark-web'
import { Title, Description } from '/docs/src/components'

const GettingStarted = () => (
    <FlexColumn>
        <Title>Getting Started</Title>
        <Description textStyle={{ marginBottom: 0 }}>
            Getting started with quark is as easy as installing the version that is appropriate for
            your application, either run `npm i quark-web` or `npm i quark-native`. Once you have
            the package locally, there are a few components that you should be aware of. First is
            `App` which should act as the root component of your application. It will make sure that
            your app is always at least as big as your viewport, allowing you to easily create
            layouts, using the `FlexRow` and `FlexColumn` components.
        </Description>
        <Description textStyle={{ marginBottom: 0 }}>
            Once you have your application wrapped in an App, and you have gotten used to using the
            State containers to build your components, you should consider theming your application
            using the Theme component described in the `Custom Theme` section on the left.
        </Description>
        <Description>
            Please keep in mind that since quark is meant to work on both native and web, the rules
            for available style values is slightly different than what you'd expect in a `React`
            component. For example, you cannot pass text styling (e.g. `color`) to a non text-based
            component, you need to pass them to a text component, like those mentioned in the
            Typography section.
        </Description>
    </FlexColumn>
)

export default GettingStarted
