// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { GetTheme, Theme } from 'quark-core'
import { primaryColor } from '../../../styles'

it('can retrieve the theme from context', () =>
    expect(
        mount(
            <Theme colors={{ primaryColor: 'black' }}>
                <GetTheme>{({ primaryColor }) => primaryColor}</GetTheme>
            </Theme>
        ).text()
    ).toEqual('black'))

it('provides default theme', () =>
    expect(
        mount(<GetTheme>{({ primaryColor: color }) => <Text>{color}</Text>}</GetTheme>).text()
    ).toEqual(primaryColor))
