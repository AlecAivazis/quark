// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { Breadcrumbs } from 'quark-core'

it('renders with single child', () =>
    expect(
        mount(
            <Breadcrumbs>
                <Text>hello</Text>
            </Breadcrumbs>
        )
    ).toMatchSnapshot())

it('renders with multiple children', () =>
    expect(
        mount(
            <Breadcrumbs>
                <Text>hello</Text>
                <Text>hello</Text>
            </Breadcrumbs>
        )
    ).toMatchSnapshot())

it('renders specified divider', () => {
    const Divider = () => <span>D</span>

    const wrapper = mount(
        <Breadcrumbs divider={<Divider />}>
            <Text>hello</Text>
            <Text>hello</Text>
        </Breadcrumbs>
    )

    expect(wrapper.find('Divider')).toHaveLength(1)
})
