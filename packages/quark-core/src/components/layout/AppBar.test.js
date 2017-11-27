// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import AppBar from './AppBar'

it('renders', () => {
    const rendered = mount(
        <AppBar>
            <Text>hello</Text>
        </AppBar>
    )

    expect(rendered).toMatchSnapshot()
})
