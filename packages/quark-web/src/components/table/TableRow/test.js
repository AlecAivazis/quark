// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { TableRow } from 'quark-web'

it('renders', () =>
    expect(
        mount(
            <TableRow>
                <Text>hello</Text>
            </TableRow>
        )
    ).toMatchSnapshot())
