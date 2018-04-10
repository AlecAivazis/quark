// external imports
import React from 'react'
import { Text, View } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { Label } from 'quark-core'
// import { LabelErrorContext } from './Label'

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

it.skip('provides error context to children', () => {
    // the component that consume error context
    const ContextComp = () => (
        <LabelErrorContext.Consumer>{JSON.stringify}</LabelErrorContext.Consumer>
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
