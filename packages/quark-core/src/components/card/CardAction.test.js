// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { CardAction } from 'quark-core'

it('renders', () => {
    expect(
        mount(
            <CardAction>
                <Text>hello</Text>
            </CardAction>
        )
    ).toMatchSnapshot()
})
