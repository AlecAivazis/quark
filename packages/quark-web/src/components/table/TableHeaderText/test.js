// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { TableHeaderText } from 'quark-web'

it('renders', () => expect(mount(<TableHeaderText>hello</TableHeaderText>)).toMatchSnapshot())
