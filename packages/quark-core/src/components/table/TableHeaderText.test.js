// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { TableHeaderText } from 'quark-core'

it('renders', () =>
    expect(
        mount(
            <TableHeaderText>
                <Text>hello</Text>
            </TableHeaderText>
        )
    ).toMatchSnapshot())
