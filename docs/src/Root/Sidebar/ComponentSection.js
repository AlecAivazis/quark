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
        {children}
    </FlexColumn>
)

const styles = {
    container: {
        marginBottom: 12
    },
    header: {
        color: grey3,
        textTransform: 'capitalize'
    },
    headerContainer: {
        marginBottom: 8
    },
    divider: {
        height: 1,
        display: 'flex',
        flexGrow: 1,
        backgroundColor: grey3,
        marginLeft: 12
    }
}

export default PageLink
