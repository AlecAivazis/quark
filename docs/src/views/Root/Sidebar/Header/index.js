// external imports
import React from 'react'
import { FlexRow, Text } from 'quark-web'
// local imports
import styles from './styles'
import Logo from './Logo'

const Header = () => (
    <FlexRow style={styles.container} alignItems="center">
        <Logo />
    </FlexRow>
)

export default Header
