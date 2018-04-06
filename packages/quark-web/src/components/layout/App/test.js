// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { App } from 'quark-web'

it('renders', () => expect(mount(<App />)).toMatchSnapshot())
