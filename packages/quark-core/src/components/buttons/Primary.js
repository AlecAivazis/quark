// @flow
// external imports
import React from 'react'
// local imports
import { primaryColor, primaryColorDark } from 'quark-core/styles'
import BaseWithText from './Text'
import type { TextButtonProps } from './Text'

const Button = ({ ...unused }: TextButtonProps) => (
    <BaseWithText
        defaultColor={primaryColor}
        activeColor={primaryColorDark}
        textColor="white"
        {...unused}
    />
)

export default Button
