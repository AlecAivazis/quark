// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { Overlay } from 'quark-core'

it('shows when visible', () => {
    expect(
        mount(
            <Overlay visible={true}>
                <Text>hello</Text>
            </Overlay>
        )
    ).toMatchSnapshot()
})

it('is hidden when not visible', () => {
    expect(
        mount(
            <Overlay>
                <Text>hello</Text>
            </Overlay>
        )
    ).toMatchSnapshot()
})
