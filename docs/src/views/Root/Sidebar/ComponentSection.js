// external imports
import React from 'react'
// local imports
import { Title, FlexColumn, FlexRow } from 'quark-web'
import { grey3 } from 'quark-web/styles'

const PageLink = ({ title, children }) => (
    <FlexColumn style={styles.container}>
        <FlexRow justifyContent="space-between" alignItems="center" style={styles.headerContainer}>
            <Title style={styles.header}>{title}</Title>
            <div style={styles.divider} />
        </FlexRow>
        <FlexColumn style={styles.content}>{children}</FlexColumn>
    </FlexColumn>
)

const styles = {
    container: {
        marginTop: 6,
        marginBottom: 4
    },
    header: {
        color: grey3,
        textTransform: 'capitalize',
        fontWeight: '400',
        marginBottom: 4
    },
    headerContainer: {
        marginBottom: 6
    },
    content: {
        marginLeft: 6
    },
    divider: {
        height: 2,
        display: 'flex',
        flexGrow: 1,
        backgroundColor: grey3,
        marginTop: 4,
        marginLeft: 12
    }
}

export default PageLink
