// external imports
import React from 'react'
// local imports
import { FilePicker, PrimaryButton } from 'quark-web'

/* title: "Multiple Files" */
export default () => (
    <FilePicker onChange={console.log}>
        <PrimaryButton>Select Files</PrimaryButton>
    </FilePicker>
)
