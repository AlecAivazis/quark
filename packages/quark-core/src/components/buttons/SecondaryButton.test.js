// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { SecondaryButton } from 'quark-core'

import renderer from 'react-test-renderer'

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
