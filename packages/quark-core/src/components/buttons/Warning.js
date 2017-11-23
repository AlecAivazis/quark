// external imports
import React from 'react'
// local imports
import { red, darkRed } from '~/styles'
import BaseWithText from './Text'

const Button = ({ ...unused }) => (
    <BaseWithText
        defaultColor={red}
        activeColor={darkRed}
        textColor="white"
        {...unused}
    />
)

export default Button
