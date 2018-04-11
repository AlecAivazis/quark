// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { Option } from 'quark-web'

it('renders default style', () => expect(mount(<Option />)).toMatchSnapshot())

it('renders active style', () => expect(mount(<Option active={true} />)).toMatchSnapshot())

it('renders selected style', () => expect(mount(<Option selected={true} />)).toMatchSnapshot())

it('mixes active and selected styles', () =>
    expect(mount(<Option active={true} selected={true} />)).toMatchSnapshot())
