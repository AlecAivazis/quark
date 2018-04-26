// external imports
import React from 'react'
// local imports
import { GetTheme, H1, FlexColumn, Text, Markdown } from 'quark-web'
import styles from './styles'
import Swatch from './Swatch'

const Pallete = () => (
    <FlexColumn>
        <H1 style={styles.title}>Color Palette</H1>
        <Markdown textStyle={styles.description}>
            These colors are all available through the `Theme` component, along with the primary
            colors (default to `blue`). To customize the theme to match your application and
            branding, see the section on Cutomizing your Theme
        </Markdown>
        <GetTheme>
            {({ blue, green, yellow, red, lightBlue, lightGreen, lightYellow, lightRed }) => (
                <div style={styles.paletteContainer}>
                    <Swatch color={blue} name="blue" value="#4A90E2" />
                    <Swatch color={green} name="green" value="#3EB642" />
                    <Swatch color={yellow} name="yellow" value="#D06E02" />
                    <Swatch color={red} name="red" value="#E04341" />
                    <Swatch color={lightBlue} name="lightBlue" value="#B1D9FF" light={true} />
                    <Swatch color={lightGreen} name="lightGreen" value="#97ECA5" light={true} />
                    <Swatch color={lightYellow} name="lightYellow" value="#FDE69D" light={true} />
                    <Swatch color={lightRed} name="lightRed" value="#F1504E" light={true} />
                </div>
            )}
        </GetTheme>
    </FlexColumn>
)

export default Pallete
