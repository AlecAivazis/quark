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

const InlineCode = ({ style, ...unused }: Props) => (
    <GetTheme>
        {({ grey2 }) => (
            <code style={{ ...styles.inlineCode, backgroundColor: grey2, ...style }} {...unused} />
        )}
    </GetTheme>
)

export default InlineCode
