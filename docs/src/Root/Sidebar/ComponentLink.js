// external imports
import React from 'react'
import { NavLink } from 'react-router-dom'
// local imports
import { Title } from 'quark-web'

const PageLink = ({ to, children }) => (
    <NavLink to={to} style={styles.container}>
        <Title>{children}</Title>
    </NavLink>
)

const styles = {
    container: {
        marginBottom: 8
    }
}

export default PageLink
