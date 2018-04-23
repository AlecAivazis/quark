// external imports
import React from 'react'
import { H3, Text } from 'quark-web'
// local imports
import styles from './styles'

const Examples = ({ info, style }) => (
    <React.Fragment>
        <H3 style={{ ...styles.header, ...style }}>Examples</H3>
        {info.examples && info.examples.length === 0 ? (
            <Text>No examples</Text>
        ) : (
            <Text>All the examples</Text>
        )}
    </React.Fragment>
)

export default Examples
