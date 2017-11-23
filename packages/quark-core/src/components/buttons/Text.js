// external imports
import React from 'react'
// local imports
import Base from './Base'
import { Text } from '../typography'
import { textSizes } from './styles'

const ButtonWithText = ({
    size,
    textColor,
    textStyle,
    children,
    ...unused
}) => (
    <Base size={size} {...unused}>
        <Text style={[textSizes[size], { color: textColor }, textStyle]}>
            {children}
        </Text>
    </Base>
)

ButtonWithText.defaultProps = {
    size: 'medium'
}

export default ButtonWithText
