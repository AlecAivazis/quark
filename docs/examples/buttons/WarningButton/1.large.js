import React from 'react'
import { WarningButton, FlexRow } from 'quark-core'

/* title: "Sizes" */
export default () => (
    <FlexRow alignItems="flex-end">
        <WarningButton size="small" style={{ marginRight: 10 }}>
            Small Button
        </WarningButton>
        <WarningButton size="medium" style={{ marginRight: 10 }}>
            Medium Button
        </WarningButton>
        <WarningButton size="large">Large Button</WarningButton>
    </FlexRow>
)
