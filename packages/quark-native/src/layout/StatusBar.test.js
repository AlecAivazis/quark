// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { StatusBar } from 'quark-native'

it('renders', () => expect(mount(<StatusBar />)).toMatchSnapshot())
