// external imports
import React from 'react'
// local imports
import { H1 } from 'quark-web'

const Title = ({ children }) => <H1 style={styles.container}>{children}</H1>

const styles = {
    container: {
        fontSize: 34,
        marginBottom: 8
    }
}

export default Title
