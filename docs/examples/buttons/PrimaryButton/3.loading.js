// external imports
import React from 'react'
import { PrimaryButton } from 'quark-core'

const resolveIn = time => () =>
    new Promise(resolve => {
        setTimeout(resolve, time)
    })

/* title: "Loading State" */
export default () => <PrimaryButton onPress={resolveIn(1000)}>Click me!</PrimaryButton>
