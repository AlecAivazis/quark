// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { Button } from 'quark-core'

it('renders', () => {
    expect(
        mount(
            <Button>
                <Text>hello</Text>
            </Button>
        )
    ).toMatchSnapshot()
})
