// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { Table } from 'quark-core'

it('renders', () =>
    expect(
        mount(
            <Table>
                <Text>hello</Text>
            </Table>
        )
    ).toMatchSnapshot())
