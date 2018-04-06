// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
import PropTypes from 'prop-types'
// local imports
import { Theme } from 'quark-core'

it('renders child', () =>
    expect(
        mount(
            <Theme>
                <Text>hello</Text>
            </Theme>
        )
    ).toMatchSnapshot())

it('provides a value for every color in a theme', () => {
    // the list of colors to look for
    const colors = [
        'primaryColor',
        'primaryColorLight',
        'primaryColorDark',
        'secondaryColor',
        'white',
        'grey1',
        'grey2',
        'grey3',
        'grey4',
        'grey5',
        'black',
        'red',
        'lightRed',
        'blue',
        'lightBlue',
        'green',
        'lightGreen'
    ]

    // the child to extract theme from context
    const Child = (args: {}, { theme }) => {
        // make sure we have
        return <Text>{JSON.stringify(theme)}</Text>
    }
    // pull the theme out of the context
    Child.contextTypes = {
        theme: PropTypes.object
    }

    // get the theme object
    const theme = JSON.parse(
        mount(
            <Theme>
                <Child />
            </Theme>
        ).text()
    )

    // map each color to their theme value and make sure we got the same number back
    expect(colors.map(color => theme[color]).filter(c => c)).toHaveLength(colors.length)
})

it('allows the theme to be customized', () => {
    // the child to extract theme from context
    const Child = (args: {}, { theme }) => {
        // make sure we have
        return <Text>{theme.primaryColor}</Text>
    }
    // pull the theme out of the context
    Child.contextTypes = {
        theme: PropTypes.object
    }

    // get the theme object
    expect(
        mount(
            <Theme theme={{ primaryColor: 'black' }}>
                <Child />
            </Theme>
        ).text()
    ).toEqual('black')
})
