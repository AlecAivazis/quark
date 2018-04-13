// external imports
import React from 'react'
// local imports
import { Title } from 'quark-web'

const PageLink = ({ children }) => <Title style={styles.container}>{children}</Title>

const styles = {
    container: {
        marginBottom: 8
    }
}

export default PageLink
