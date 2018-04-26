// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { TableCell } from 'quark-web'

it('renders', () =>
    expect(
        mount(
            <TableCell>
                <Text>hello</Text>
            </TableCell>
        )
    ).toMatchSnapshot())
