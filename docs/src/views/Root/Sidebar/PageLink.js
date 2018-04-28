// external imports
import React from 'react'
import { NavLink } from 'react-router-dom'
// local imports
import { H3, FlexColumn } from 'quark-web'
import { grey5 } from 'quark-web/styles'
import { primaryColor } from 'src/colors'

const PageLink = ({ title, to, children, style, top }) => (
    <FlexColumn style={!top && styles.container}>
        <H3 style={styles.header}>{title}</H3>
        <FlexColumn style={styles.content}>{children}</FlexColumn>
    </FlexColumn>
)

const styles = {
    container: {
        marginTop: 12
    },
    header: {
        marginBottom: 0,
        fontWeight: '600',
        display: 'flex',
        width: '100%',
        padding: 6,
        color: grey5,
        marginBottom: 0,
        fontSize: 18
    },
    content: {
        marginLeft: 20
    }
}

export default PageLink
