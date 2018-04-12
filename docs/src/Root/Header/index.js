// external imports
import React from 'react'
import { FlexRow, Text } from 'quark-web'
// local imports
import styles from './styles'

const Header = () => (
    <FlexRow style={styles.container} alignItems="center">
        <Text style={{ color: 'white' }}>Header</Text>
    </FlexRow>
)

export default Header
