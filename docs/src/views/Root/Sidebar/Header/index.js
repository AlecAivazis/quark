// external imports
import React from 'react'
import { FlexRow, Text } from 'quark-web'
import { Link } from 'react-router-dom'
// local imports
import styles from './styles'
import Logo from './Logo'

const Header = () => (
    <FlexRow style={styles.container} alignItems="center">
        <Link to="/">
            <Logo />
        </Link>
    </FlexRow>
)

export default Header
