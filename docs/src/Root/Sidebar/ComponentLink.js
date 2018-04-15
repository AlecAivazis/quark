// external imports
import React from 'react'
import { NavLink } from 'react-router-dom'
// local imports
import { Title } from 'quark-web'
import { grey5 } from 'quark-web/styles'
import { primaryColor } from 'src/colors'

const PageLink = ({ to, children }) => (
    <NavLink to={to} style={styles.link} activeStyle={styles.activeLink}>
        {children}
    </NavLink>
)

const styles = {
    container: {
        fontWeight: '400'
    },
    link: {
        color: 'inherit',
        padding: 8
    },
    activeLink: {
        color: primaryColor,
        background: grey5,
        padding: 6,
        paddingLeft: 8,
        marginTop: 2,
        marginBottom: 2,
        color: 'white'
    }
}

export default PageLink
