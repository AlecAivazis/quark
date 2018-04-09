// @flow
// external imports
import React from 'react'
// local imports
import { GetTheme } from 'quark-core'
import BaseWithText from '../Text'
import type { TextButtonProps } from '../Text'

const SecondaryButton = ({ ...unused }: TextButtonProps) => (
    <GetTheme>
        {({ white, grey1, grey5 }) => (
            <BaseWithText defaultColor={white} activeColor={grey1} textColor={grey5} {...unused} />
        )}
    </GetTheme>
)

export default SecondaryButton
