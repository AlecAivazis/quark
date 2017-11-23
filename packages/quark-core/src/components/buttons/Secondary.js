// @flow
// external imports
import React from 'react'
// local imports
import { grey5, grey1, primaryColor } from 'quark-core/styles'
import BaseWithText from './Text'
import type { TextButtonProps } from './Text'

const SecondaryButton = ({ ...unused }: TextButtonProps) => (
    <BaseWithText
        defaultColor="white"
        activeColor={grey1}
        textColor={grey5}
        {...unused}
    />
)

export default SecondaryButton
