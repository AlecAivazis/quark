// external imports
import React from 'react'
// local imports
import { Label, TextInput } from 'quark-web'

/* title: "Default" */
export default () => (
    <Label
        value="Label Value"
        description="This should tell the user what valid inputs are, whether it's required or optional, etc."
    >
        <TextInput />
    </Label>
)
