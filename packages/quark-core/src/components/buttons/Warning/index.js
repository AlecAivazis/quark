// external imports
import React from 'react'
// local imports
import { GetTheme } from 'quark-core'
import BaseWithText from '../Text'
import type { TextButtonProps } from '../Text'

const WarningButton = ({ ...unused }: TextButtonProps) => (
    <GetTheme>
        {({ red, lightRed, darkRed, white }) => (
            <BaseWithText
                disabledColor={lightRed}
                defaultColor={red}
                activeColor={darkRed}
                textColor={white}
                {...unused}
            />
        )}
    </GetTheme>
)

export default WarningButton
