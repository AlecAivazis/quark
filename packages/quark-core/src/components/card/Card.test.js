// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import CardGrid from './'
import { Card } from 'quark-core'

import renderer from 'react-test-renderer'

it('renders', () => {
    const rendered = mount(
        <Card>
            <Text>hello</Text>
        </Card>
    )

    expect(rendered).toMatchSnapshot()
})
