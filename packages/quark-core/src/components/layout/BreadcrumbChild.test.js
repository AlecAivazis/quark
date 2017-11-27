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

it('accepts press handlers', () => {
    // create a spy to test press handlers
    const spy = jest.fn()

    const rendered = mount(
        <BreadcrumbChild onPresOut={() => spy()}>
            <Text>hello</Text>
        </BreadcrumbChild>
    )

    rendered.find('BreadcrumbChild').simulate('pressIn')
})
