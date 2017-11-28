// external imports
import React from 'react'
import { Text, View } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { Label } from 'quark-core'

it('renders', () =>
    expect(
        mount(
            <Label value="asdf">
                <View>
                    <Text>hello</Text>
                </View>
            </Label>
        )
    ).toMatchSnapshot())
