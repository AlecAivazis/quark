// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { BaseButtonWithText } from 'quark-core'

import renderer from 'react-test-renderer'

it('renders', () => {
    expect(
        mount(
            <BaseButtonWithText>
                <Text>hello</Text>
            </BaseButtonWithText>
        )
    ).toMatchSnapshot()
})

it('accepts raw text as a child', () => {
    expect(mount(<BaseButtonWithText>hello</BaseButtonWithText>)).toMatchSnapshot()
})
