// external imports
import React from 'react'
import { Button } from 'quark-core'

const resolveIn = time => () =>
    new Promise(resolve => {
        setTimeout(resolve, time)
    })

/* title: "Loading State" */
export default () => <Button onPress={resolveIn(1000)}>Click me!</Button>
