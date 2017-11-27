// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { SecondaryButton } from 'quark-core'

it('renders', () => {
    expect(
        mount(
            <SecondaryButton>
                <Text>hello</Text>
            </SecondaryButton>
        )
    ).toMatchSnapshot()
})

it('accepts raw text as a child', () => {
    expect(mount(<SecondaryButton>hello</SecondaryButton>)).toMatchSnapshot()
})
