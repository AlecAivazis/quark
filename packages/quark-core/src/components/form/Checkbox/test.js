// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { Checkbox } from 'quark-core'

it('renders true', () => expect(mount(<Checkbox>{true}</Checkbox>)).toMatchSnapshot())

it('renders false', () => expect(mount(<Checkbox>{false}</Checkbox>)).toMatchSnapshot())

it('renders content true', () =>
    expect(mount(<Checkbox content={<Text>hello</Text>}>{true}</Checkbox>)).toMatchSnapshot())

it('renders content false', () =>
    expect(mount(<Checkbox content={<Text>hello</Text>}>{false}</Checkbox>)).toMatchSnapshot())
