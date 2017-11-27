// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { Card } from 'quark-core'

it('renders', () => {
    const rendered = mount(
        <Card>
            <Text>hello</Text>
        </Card>
    )

    expect(rendered).toMatchSnapshot()
})
