// external imports
import React from 'react'
// local imports
import { Title, Text, FlexColumn, GetTheme } from 'quark-web'
import styles from './styles'

const Swatch = ({ name, whiteFont }) => (
    <GetTheme>
        {theme => (
            <FlexColumn style={{ ...styles.swatch, backgroundColor: theme[name] }}>
                <Title
                    style={
                        whiteFont ? { ...styles.swatchTitle, color: 'white' } : styles.swatchTitle
                    }
                >
                    {name}
                </Title>
                <Text style={whiteFont && { color: 'white' }}>{theme[name]}</Text>
            </FlexColumn>
        )}
    </GetTheme>
)

export default Swatch
