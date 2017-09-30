// external imports
import React from 'react'
// local imports
import { grey1, grey5 } from '~/styles'
import BaseWithText from './Text'

const Button = ({...unused}) => (
    <BaseWithText
        defaultColor="white"
        activeColor={grey1}
        textColor={grey5}
        {...unused}
    />
)

export default Button
