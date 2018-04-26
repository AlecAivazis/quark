// @flow
// external import
import * as React from 'react'
import { GetTheme } from 'quark-core'
// local imports
import styles from './styles'

type Props = {
    children: React.Node,
    style: CSSStyleDeclaration
}

const Code = ({ style, value, ...unused }) => (
    <GetTheme>
        {({ grey1 }) => (
            <pre style={{ ...styles.code, backgroundColor: grey1 }}>
                <code style={style}>{value}</code>
            </pre>
        )}
    </GetTheme>
)

export default Code
