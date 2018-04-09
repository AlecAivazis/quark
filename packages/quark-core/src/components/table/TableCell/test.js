// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { TableCell } from 'quark-core'

it('renders', () =>
    expect(
        mount(
            <TableCell>
                <Text>hello</Text>
            </TableCell>
        )
    ).toMatchSnapshot())
