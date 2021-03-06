// external imports
import React from 'react'
// local imports
import { GetTheme, H1, FlexColumn, Text, Markdown } from 'quark-web'
import styles from './styles'
import Swatch from './Swatch'
import { Title } from 'src/components'

const Pallete = () => (
    <FlexColumn>
        <Title>Color Palette</Title>
        <Markdown textStyle={styles.description}>
            These colors are all available through the `Theme` component, along with the primary
            colors (default to `blue`). To customize the theme to match your application and
            branding, see the section on Cutomizing your Theme
        </Markdown>
        <div style={styles.paletteContainer}>
            <Swatch name="blue" />
            <Swatch name="green" />
            <Swatch name="yellow" />
            <Swatch name="red" />
            <Swatch name="darkBlue" whiteFont={true} />
            <Swatch name="darkGreen" whiteFont={true} />
            <Swatch name="darkYellow" whiteFont={true} />
            <Swatch name="darkRed" whiteFont={true} />
            <Swatch name="lightBlue" />
            <Swatch name="lightGreen" />
            <Swatch name="lightYellow" />
            <Swatch name="lightRed" />
            <Swatch name="grey1" />
            <Swatch name="grey2" />
            <Swatch name="grey3" />
            <Swatch name="grey4" />
            <Swatch name="grey5" whiteFont={true} />
        </div>
    </FlexColumn>
)

export default Pallete
