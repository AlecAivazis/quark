// @flow
// external imports
import React from 'react'
// local imports
import { GetTheme } from 'quark-core'
import BaseWithText from './Text'
import type { TextButtonProps } from './Text'

const Button = (props: TextButtonProps) => (
    <GetTheme>
        {({ primaryColor, primaryColorDark, white, grey2 }) => (
            <BaseWithText
                defaultColor={primaryColor}
                activeColor={primaryColorDark}
                disabledColor={grey2}
                textColor={white}
                {...props}
            />
        )}
    </GetTheme>
)

export default Button
