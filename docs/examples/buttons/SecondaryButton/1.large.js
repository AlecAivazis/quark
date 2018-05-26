import React from 'react'
import { SecondaryButton, FlexRow } from 'quark-core'

/* title: "Sizes" */
export default () => (
    <FlexRow alignItems="flex-end">
        <SecondaryButton size="small" style={{ marginRight: 10 }}>
            Small Button
        </SecondaryButton>
        <SecondaryButton size="medium" style={{ marginRight: 10 }}>
            Medium Button
        </SecondaryButton>
        <SecondaryButton size="large">Large Button</SecondaryButton>
    </FlexRow>
)
