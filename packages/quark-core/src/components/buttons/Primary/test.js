// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { PrimaryButton } from 'quark-core'

it('renders', () => {
    expect(
        mount(
            <PrimaryButton>
                <Text>hello</Text>
            </PrimaryButton>
        )
    ).toMatchSnapshot()
})

it('accepts raw text as a child', () => {
    expect(mount(<PrimaryButton>hello</PrimaryButton>)).toMatchSnapshot()
})
