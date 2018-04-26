// external imports
import React from 'react'

// local imports
import { FlexColumn, H1, Markdown } from 'quark-web'
import styles from './styles'

const CustomTheme = () => (
    <FlexColumn>
        <H1 style={styles.title}>Custom Theme</H1>
        <Markdown textStyle={styles.description}>
            All of the components in `quark` are themable. Along with the color palette values, a
            full theme can also specify different shades of a primary color (`primaryColor`,
            `primaryColorDark`, and `primaryColorLight`). To provide custom colors, wrap your entire
            application in a `Theme` component:
        </Markdown>
        <Markdown style={{ margin: 32 }} textStyle={{ fontSize: 16 }}>
            {`\`\`\`javascript
const ThemedApp = () => (
  <Theme
    colors={{
      primaryColor: 'green',
      primaryColorDark: 'darkgreen',
      primaryColorLight: 'lightgreen',
    }}
  >
    <App />
  </Theme>
)
\`\`\` `}
        </Markdown>
        <Markdown textStyle={styles.description}>
            Retrieving theme colors is easily achieved with the `GetTheme` component.
        </Markdown>
        <Markdown style={{ margin: 32 }} textStyle={{ fontSize: 16 }}>
            {`\`\`\`javascript
<GetTheme>
  {({ primaryColor }) => <div style={{backgroundColor: primaryColor}} />}
</GetTheme>

\`\`\` `}
        </Markdown>
    </FlexColumn>
)

export default CustomTheme
