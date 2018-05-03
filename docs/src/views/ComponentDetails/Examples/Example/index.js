import React from 'react'
import { FlexColumn } from 'quark-web'

const Example = ({ info }) => {
    // get the section
    const [section] = info.filepath.split('src/components/')[1].split('/')
    // dynamically require example
    const ExampleComponent = require(`../../../../../examples/${section}/${info.name}/${
        info.examples[0].filename
    }`).default

    return (
        <FlexColumn>
            <ExampleComponent />
        </FlexColumn>
    )
}

export default Example
