// external imports
import React from 'react'
import { WarningButton } from 'quark-core'

const resolveIn = time => () =>
    new Promise(resolve => {
        setTimeout(resolve, time)
    })

/* title: "Loading State" */
export default () => <WarningButton onPress={resolveIn(1000)}>Click me!</WarningButton>
