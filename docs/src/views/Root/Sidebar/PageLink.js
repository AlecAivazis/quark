// external imports
import React from 'react'
import { NavLink } from 'react-router-dom'
// local imports
import { H3, FlexColumn } from 'quark-web'
import { grey5 } from 'quark-web/styles'
import { primaryColor } from 'src/colors'

const PageLink = ({ title, to, children, style }) => (
    <FlexColumn style={styles.container}>
        <H3 style={styles.headerContainer}>
            <NavLink
                exact
                to={to}
                style={{ ...styles.header, ...style }}
                activeStyle={styles.activeLink}
            >
                {title}
            </NavLink>
        </H3>

        <FlexColumn style={styles.content}>{children}</FlexColumn>
    </FlexColumn>
)

const styles = {
    container: {
        marginTop: 12
    },
    headerContainer: {
        marginBottom: 0
    },
    header: {
        fontWeight: '600',
        display: 'flex',
        width: '100%',
        padding: 6,
        color: grey5,
        marginBottom: 0
    },
    content: {
        marginLeft: 20
    },
    activeLink: {
        color: 'white',
        backgroundColor: grey5,
        color: 'white'
    }
}

export default PageLink
