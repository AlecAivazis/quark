// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { BaseButton } from 'quark-core'

it('renders', () => {
    const rendered = mount(
        <BaseButton>
            <Text>hello</Text>
        </BaseButton>
    )

    expect(rendered).toMatchSnapshot()
})
