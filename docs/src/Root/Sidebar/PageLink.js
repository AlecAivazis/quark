// external imports
import React from 'react'
// local imports
import { H3, FlexColumn } from 'quark-web'

const PageLink = ({ title, children }) => (
    <FlexColumn style={styles.container}>
        <H3 style={children ? styles.header : styles.orphanHeader}>{title}</H3>
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
