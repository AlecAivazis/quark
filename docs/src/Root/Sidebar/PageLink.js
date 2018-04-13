// external imports
import React from 'react'
import { NavLink } from 'react-router-dom'
// local imports
import { H3, FlexColumn } from 'quark-web'

const PageLink = ({ title, to, children }) => (
    <FlexColumn style={styles.container}>
        <NavLink to={to} style={children ? styles.header : styles.orphanHeader}>
            <H3>{title}</H3>
        </NavLink>
        <FlexColumn style={styles.content}>{children}</FlexColumn>
    </FlexColumn>
)

const styles = {
    container: {
        marginBottom: 20
    },
    header: {
        marginBottom: 12
    },
    orphanHeader: {
        marginBottom: 0
    },
    content: {
        marginLeft: 12
    }
}

export default PageLink
