// external imports
import React from 'react'
// local imports
import { ImagePicker, PrimaryButton } from 'quark-web'

/* title: "Multiple Files" */
export default () => (
    <ImagePicker onChange={console.log} onError={console.log}>
        <PrimaryButton>Select Files</PrimaryButton>
    </ImagePicker>
)
