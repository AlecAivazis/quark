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
            <code style={{ backgroundColor: grey2, ...style, ...styles.inlineCode }} {...unused} />
        )}
    </GetTheme>
)

export default InlineCode
