// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { WarningButton } from 'quark-core'

it('renders', () => {
    expect(
        mount(
            <WarningButton>
                <Text>hello</Text>
            </WarningButton>
        )
    ).toMatchSnapshot()
})

it('accepts raw text as a child', () => {
    expect(mount(<WarningButton>hello</WarningButton>)).toMatchSnapshot()
})
