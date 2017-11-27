// @flow
// external imports
import React from 'react'
// local imports
import { grey1, grey5 } from 'quark-core/styles'
import BaseWithText from './Text'
import type { TextButtonProps } from './Text'

const Button = ({ ...unused }: TextButtonProps) => (
    <BaseWithText
        defaultColor="white"
        activeColor={grey1}
        textColor={grey5}
        {...unused}
    />
)

export default Button
