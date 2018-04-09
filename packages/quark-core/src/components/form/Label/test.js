// external imports
import React from 'react'
import { Text, View } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { Label } from 'quark-core'
import { ErrorLabelContext } from './Label'

it('renders', () =>
    expect(
        mount(
            <Label value="asdf">
                <View>
                    <Text>hello</Text>
                </View>
            </Label>
        )
    ).toMatchSnapshot())

it('provides error context to children', () => {
    // the component that consume error context
    const ContextComp = () => (
        <ErrorLabelContext.Consumer>{JSON.stringify}</ErrorLabelContext.Consumer>
    )

    expect(
        mount(
            <Label value="asdf" error={true}>
                <ContextComp />
            </Label>
        )
            .text()
            .toEqual('true')
    )

    expect(
        mount(
            <Label value="asdf" error={false}>
                <ContextComp />
            </Label>
        )
            .text()
            .toEqual('false')
    )
})
