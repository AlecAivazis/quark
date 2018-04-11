// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { TextInput } from 'quark-native'

it('renders', () => expect(mount(<TextInput />)).toMatchSnapshot())
