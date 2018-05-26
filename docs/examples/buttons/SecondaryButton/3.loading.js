// external imports
import React from 'react'
import { SecondaryButton } from 'quark-core'

const resolveIn = time => () =>
    new Promise(resolve => {
        setTimeout(resolve, time)
    })

/* title: "Loading State" */
export default () => <SecondaryButton onPress={resolveIn(1000)}>Click me!</SecondaryButton>
