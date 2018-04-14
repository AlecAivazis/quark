// external imports
import React from 'react'
import { NavLink } from 'react-router-dom'
// local imports
import { H3, FlexColumn } from 'quark-web'
import { primaryColor } from 'src/colors'

const PageLink = ({ title, to, children }) => (
    <FlexColumn style={styles.container}>
        <H3 style={children ? styles.header : styles.orphanHeader}>
            <NavLink exact style={styles.link} activeStyle={styles.activeLink} to={to}>
                {title}
            </NavLink>
        </H3>

        <FlexColumn style={styles.content}>{children}</FlexColumn>
    </FlexColumn>
)

const styles = {
    container: {
        marginBottom: 20
    },
    header: {
        marginBottom: 16,
        fontWeight: '600'
    },
    orphanHeader: {
        marginBottom: 0,
        fontWeight: '600'
    },
    content: {
        marginLeft: 12
    },
    link: {
        color: 'inherit'
    },
    activeLink: {
        color: primaryColor
    }
}

export default PageLink
