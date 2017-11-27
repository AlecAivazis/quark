// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import BreadcrumbChild from './BreadcrumbChild'

it('renders', () => {
    const rendered = mount(
        <BreadcrumbChild>
            <Text>hello</Text>
        </BreadcrumbChild>
    )

    expect(rendered).toMatchSnapshot()
})
