// external
import React from 'react'
import { FlexColumn, H3, Monospace } from 'quark-web'
// local
import styles from './styles'

const Example = ({ info, example }) => {
    // get the section
    const [section] = info.filepath.split('src/components/')[1].split('/')
    // dynamically require example
    const ExampleComponent = require(`../../../../../examples/${section}/${info.name}/${
        example.filename
    }`).default
    console.log(example)
    return (
        <FlexColumn style={styles.container}>
            <H3>{example.title}</H3>
            <div style={styles.example}>
                <ExampleComponent />
            </div>
            <Monospace>{example.contents}</Monospace>
        </FlexColumn>
    )
}

export default Example
