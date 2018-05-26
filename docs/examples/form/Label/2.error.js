// external imports
import React from 'react'
// local imports
import { Label, TextInput } from 'quark-web'

/* title: "Error State" */
export default () => (
    <Label
        value="Label Value"
        description="This is a description that was not met by the user."
        error={true}
    >
        <TextInput />
    </Label>
)
