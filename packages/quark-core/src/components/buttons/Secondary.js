// external imports
import React from 'react'
// local imports
import { grey5, grey1, primaryColor } from '~/styles'
import BaseWithText from './Text'

const SecondaryButton = ({ ...unused }) => (
    <BaseWithText
        defaultColor="white"
        activeColor={grey1}
        textColor={grey5}
        {...unused}
    />
)

export default SecondaryButton
