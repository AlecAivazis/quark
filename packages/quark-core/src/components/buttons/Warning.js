// external imports
import React from 'react'
// local imports
import { red, darkRed } from '~/styles'
import BaseButton from './Base'

const Button = ({...unused}) => (
    <BaseButton
        defaultColor={red}
        activeColor={darkRed}
        textColor="white"
        {...unused}
    />
)

export default Button
