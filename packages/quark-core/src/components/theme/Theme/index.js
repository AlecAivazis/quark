// @flow
// external imports
import * as React from 'react'
import PropTypes from 'prop-types'
// local imports
import {
    primaryColor,
    primaryColorLight,
    primaryColorDark,
    secondaryColor,
    white,
    grey1,
    grey2,
    grey3,
    grey4,
    grey5,
    black,
    red,
    lightRed,
    blue,
    lightBlue,
    green,
    lightGreen,
    yellow,
    lightYellow
} from '../../../styles'
// the type that represents a color in the theme
type Color = string

export type Theme = {
    primaryColor?: Color,
    primaryColorLight?: Color,
    primaryColorDark?: Color,
    secondaryColor?: Color,
    white?: Color,
    grey1?: Color,
    grey2?: Color,
    grey3?: Color,
    grey4?: Color,
    grey5?: Color,
    grey6?: Color,
    grey7?: Color,
    grey8?: Color,
    black?: Color,
    red?: Color,
    lightRed?: Color,
    blue?: Color,
    lightBlue?: Color,
    green?: Color,
    lightGreen?: Color
}

export const defaultTheme = {
    primaryColor,
    primaryColorLight,
    primaryColorDark,
    secondaryColor,
    white,
    grey1,
    grey2,
    grey3,
    grey4,
    grey5,
    black,
    red,
    lightRed,
    blue,
    lightBlue: lightBlue,
    green,
    lightGreen: lightGreen
}

type Props = {
    children: React.Node,
    theme: Theme
}

class ThemeProvider extends React.Component<Props> {
    static childContextTypes = {
        theme: PropTypes.object
    }

    getChildContext() {
        return {
            theme: {
                ...defaultTheme,
                ...this.props.theme
            }
        }
    }

    render() {
        return this.props.children
    }
}

export default ThemeProvider
