// external imports
import React from 'react'
// local imports
import { Markdown } from 'quark-web'

const Description = ({ children, textStyle, style }) => (
    <Markdown
        style={{ ...styles.container, ...style }}
        textStyle={{ ...styles.description, ...textStyle }}
    >
        {children}
    </Markdown>
)

const styles = {
    description: {
        fontSize: '18',
        color: '#717172',
        marginBottom: 20,
        marginTop: 20
    },
    container: {}
}

export default Description
