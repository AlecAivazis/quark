// @flow
// external imports
import * as React from 'react'
import PropTypes from 'prop-types'
// local imports
import { defaultTheme } from '../Theme'
import type { Theme } from '../Theme'

type Props = {
    children: Theme => React.Node
}

type Context = {
    theme: Theme
}

const GetTheme = (props: Props, { theme = defaultTheme }: Context) => (
    <React.Fragment>{props.children(theme)}</React.Fragment>
)

GetTheme.contextTypes = {
    theme: PropTypes.object
}

export default GetTheme
