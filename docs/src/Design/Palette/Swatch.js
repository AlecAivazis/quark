// external imports
import React from 'react'
// local imports
import { Title, Text, FlexColumn } from 'quark-web'
import styles from './styles'

const Swatch = ({ color, value, name }) => (
    <FlexColumn style={{ ...styles.swatch, background: color }}>
        <Title style={styles.swatchTitle}>{name}</Title>
        <Text>{value}</Text>
    </FlexColumn>
)

export default Swatch
