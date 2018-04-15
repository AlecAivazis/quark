// external imports
import React from 'react'
import { NavLink } from 'react-router-dom'
// local imports
import { H3, FlexColumn } from 'quark-web'
import { grey5 } from 'quark-web/styles'
import { primaryColor } from 'src/colors'

const PageLink = ({ title, to, children }) => (
    <FlexColumn style={children ? styles.container : styles.orphanContainer}>
        <H3>
            <NavLink
                exact
                to={to}
                style={children ? styles.header : styles.orphanHeader}
                activeStyle={styles.activeLink}
            >
                {title}
            </NavLink>
        </H3>

        <FlexColumn style={styles.content}>{children}</FlexColumn>
    </FlexColumn>
)

const header = {
    fontWeight: '600',
    display: 'flex',
    width: '100%',
    padding: 6,
    color: grey5
}

const styles = {
    container: {
        marginBottom: 10
    },
    orphanContainer: {
        marginBottom: 0
    },
    header,
    orphanHeader: {
        ...header,
        marginBottom: 0
    },
    content: {
        marginLeft: 12
    },
    activeLink: {
        color: 'white',
        backgroundColor: grey5,
        color: 'white'
    }
}

export default PageLink
