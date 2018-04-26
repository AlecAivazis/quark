// external imports
import React from 'react'
// local imports
import { Markdown } from 'quark-web'

const Description = ({ children, style }) => (
    <Markdown style={style} textStyle={styles.description}>
        {children}
    </Markdown>
)

const styles = {
    description: {
        fontSize: '18',
        color: '#717172',
        marginBottom: 20,
        marginTop: 20
    }
}

export default Description
