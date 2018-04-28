// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { TableHeader } from 'quark-web'

it('renders', () =>
    expect(
        mount(
            <TableHeader>
                <Text>hello</Text>
            </TableHeader>
        )
    ).toMatchSnapshot())
