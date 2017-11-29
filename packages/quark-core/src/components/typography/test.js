// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { H1, H2, H3, Title, Subtitle, Link, Monospace } from 'quark-core'

it('H1 renders', () => expect(mount(<H1>hello</H1>)).toMatchSnapshot())

it('H2 renders', () => expect(mount(<H2>hello</H2>)).toMatchSnapshot())

it('H3 renders', () => expect(mount(<H3>hello</H3>)).toMatchSnapshot())

it('Title renders', () => expect(mount(<Title>hello</Title>)).toMatchSnapshot())

it('Subtitle renders', () => expect(mount(<Subtitle>hello</Subtitle>)).toMatchSnapshot())

it('Link renders', () => expect(mount(<Link>hello</Link>)).toMatchSnapshot())

it('Monospace renders', () => expect(mount(<Monospace>hello</Monospace>)).toMatchSnapshot())
