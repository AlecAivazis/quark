// @flow
// external imports
import * as React from 'react'
import { Text as NativeText, TextPropTypes } from 'react-native'
// local imports
import { GetTheme } from 'quark-core'
import { h1, h2, h3, title, subtitle, text, link } from 'quark-core/styles'
import styles from './styles'

type TextProperties = TextPropTypes

// this component assigns the default value to text based on theme
const InnerText = ({ style, ...unused }: { style: TextProperties }) => (
    <GetTheme>
        {({ grey5 }) => (
            <NativeText style={{ color: grey5, ...styles.reset, ...style }} {...unused} />
        )}
    </GetTheme>
)

export const H1 = ({ style, ...unused }: TextProperties) => (
    <InnerText style={{ ...h1, ...styles.h1, ...style }} {...unused} />
)

export const H2 = ({ style, ...unused }: TextProperties) => (
    <InnerText style={{ ...h2, ...styles.h2, ...style }} {...unused} />
)

export const H3 = ({ style, ...unused }: TextProperties) => (
    <InnerText style={{ ...h3, ...styles.h3, ...style }} {...unused} />
)

export const Title = ({ style, ...unused }: TextProperties) => (
    <InnerText style={{ ...title, ...styles.title, ...style }} {...unused} />
)

export const Subtitle = ({ style, ...unused }: TextProperties) => (
    <InnerText style={{ ...subtitle, ...styles.subtitle, ...style }} {...unused} />
)

export const Text = ({ style, ...unused }: TextProperties) => (
    <InnerText style={{ ...text, ...styles.text, ...style }} {...unused} />
)

export const Link = ({ style, ...unused }: TextProperties) => (
    <InnerText style={{ ...link, ...styles.link, ...style }} {...unused} />
)

export const Monospace = ({ style, ...unused }: TextProperties) => (
    <InnerText style={{ ...link, ...styles.link, ...style }} {...unused} />
)
