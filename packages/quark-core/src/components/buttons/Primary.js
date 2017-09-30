// external imports
import React from 'react'
// local imports
import { primaryColor, primaryColorDark } from '~/styles'
import BaseWithText from './Text'

const Button = ({...unused}) => (
    <BaseWithText
        defaultColor={primaryColor}
        activeColor={primaryColorDark}
        textColor="white"
        {...unused}
    />
)

export default Button
