import React from 'react'
import { PrimaryButton, FlexRow } from 'quark-core'

/* title: "Sizes" */
export default () => (
    <FlexRow alignItems="flex-end">
        <PrimaryButton size="small" style={{ marginRight: 10 }}>
            Small Button
        </PrimaryButton>
        <PrimaryButton size="medium" style={{ marginRight: 10 }}>
            Medium Button
        </PrimaryButton>
        <PrimaryButton size="large">Large Button</PrimaryButton>
    </FlexRow>
)
