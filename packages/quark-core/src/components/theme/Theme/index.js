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
    darkRed,
    blue,
    lightBlue,
    darkBlue,
    green,
    darkGreen,
    lightGreen,
    yellow,
    darkYellow,
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
    darkRed?: Color,
    blue?: Color,
    lightBlue?: Color,
    darkBlue?: Color,
    green?: Color,
    lightGreen?: Color,
    darkGreen?: Color,
    yellow?: Color,
    lightYellow?: Color,
    darkYellow?: Color
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
    darkRed,
    lightRed,
    blue,
    darkBlue,
    lightBlue,
    green,
    darkGreen,
    lightGreen,
    yellow,
    darkYellow,
    lightYellow
}

type Props = {
    children: React.Node,
    colors: Theme
}

class ThemeProvider extends React.Component<Props> {
    static childContextTypes = {
        theme: PropTypes.object
    }

    getChildContext() {
        return {
            theme: {
                ...defaultTheme,
                ...this.props.colors
            }
        }
    }

    render() {
        return this.props.children
    }
}

export default ThemeProvider
