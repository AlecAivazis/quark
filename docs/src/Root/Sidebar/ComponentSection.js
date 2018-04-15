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
        marginBottom: 18
    },
    header: {
        color: grey3,
        textTransform: 'capitalize',
        fontWeight: 400
    },
    headerContainer: {
        marginBottom: 4
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
