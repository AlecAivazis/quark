// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { TableText } from 'quark-core'

it('renders', () => expect(mount(<TableText>hello</TableText>)).toMatchSnapshot())
