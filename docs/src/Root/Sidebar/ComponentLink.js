// external imports
import React from 'react'
import { NavLink } from 'react-router-dom'
// local imports
import { Title } from 'quark-web'
import { primaryColor } from 'src/colors'

const PageLink = ({ to, children }) => (
    <Title style={styles.container}>
        <NavLink to={to} style={styles.link} activeStyle={styles.activeLink}>
            {children}
        </NavLink>
    </Title>
)

const styles = {
    container: {
        marginBottom: 8
    },
    link: {
        color: 'inherit'
    },
    activeLink: {
        color: primaryColor
    }
}

export default PageLink
