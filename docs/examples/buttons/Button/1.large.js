import React from 'react'
import { Button, FlexRow } from 'quark-core'

/* title: "Sizes" */
export default () => (
    <FlexRow alignItems="flex-end">
        <Button size="small" style={{ marginRight: 10 }}>
            Small Button
        </Button>
        <Button size="medium" style={{ marginRight: 10 }}>
            Medium Button
        </Button>
        <Button size="large">Large Button</Button>
    </FlexRow>
)
