// external imports
import React from 'react'
// local imports
import { GetTheme } from 'quark-core'
import BaseWithText from './Text'
import type { TextButtonProps } from './Text'

const WarningButton = ({ ...unused }: TextButtonProps) => (
    <GetTheme>
        {({ red, lightRed, white }) => (
            <BaseWithText defaultColor={lightRed} activeColor={red} textColor={white} {...unused} />
        )}
    </GetTheme>
)

export default WarningButton
