// external imports
import React from 'react'
import { FlexColumn, Text } from 'quark-web'
// local imports
import styles from './styles'

const Sidebar = () => (
    <FlexColumn style={styles.container}>
        <Text style={{ color: 'white' }}>Sidebar</Text>
    </FlexColumn>
)

export default Sidebar
