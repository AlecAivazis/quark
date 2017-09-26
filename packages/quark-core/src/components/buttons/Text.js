// external imports
import React from 'react'
import { Text } from 'react-native'
// local imports
import Base from './Base'
import {textSizes} from './styles'

const ButtonWithText = ({size, textColor, textStyle, children, ...unused}) => (
    <Base size={size} {...unused}>
        <Text
            style={[
                textSizes[size],
                { color: textColor },
                textStyle,
            ]}
        >
            {children}
        </Text>
    </Base>
)

ButtonWithText.defaultProps = {
    size: "medium",
}


export default ButtonWithText
