// @flow
// external imports
import React from 'react'
// local imports
import Base from '../Base'
import type { ButtonProps } from '../Base'
import { Text } from '../../typography'
import { textSizes } from '../styles'

export type TextButtonProps = ButtonProps & {
    textColor?: string,
    textStyle?: {}
}

const ButtonWithText = ({ size, textColor, textStyle, children, ...unused }: TextButtonProps) => (
    <Base size={size} {...unused} textColor={textColor}>
        <Text style={{ ...textSizes[size], color: textColor, textStyle }}>{children}</Text>
    </Base>
)

ButtonWithText.defaultProps = {
    size: 'medium'
}

export default ButtonWithText
