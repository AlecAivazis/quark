// @flow
// external imports
import React from 'react'
import { Text as NativeText, TextProperties } from 'react-native'
// local imports
import { h1, h2, h3, title, subtitle, text, link } from 'quark-core/styles'
import styles from './styles'

export const H1 = ({ style, ...unused }: TextProperties) => (
    <NativeText style={[h1, styles.h1, styles.reset, style]} {...unused} />
)

export const H2 = ({ style, ...unused }: TextProperties) => (
    <NativeText style={[h2, styles.h2, styles.reset, style]} {...unused} />
)

export const H3 = ({ style, ...unused }: TextProperties) => (
    <NativeText style={[h3, styles.h3, styles.reset, style]} {...unused} />
)

export const Title = ({ style, ...unused }: TextProperties) => (
    <NativeText
        style={[title, styles.title, styles.reset, style]}
        {...unused}
    />
)

export const Subtitle = ({ style, ...unused }: TextProperties) => (
    <NativeText
        style={[subtitle, styles.subtitle, styles.reset, style]}
        {...unused}
    />
)

export const Text = ({ style, ...unused }: TextProperties) => (
    <NativeText style={[text, styles.text, styles.reset, style]} {...unused} />
)

export const Link = ({ style, ...unused }: TextProperties) => (
    <NativeText style={[link, styles.link, styles.reset, style]} {...unused} />
)

export const Monospace = ({ style, ...unused }: TextProperties) => (
    <NativeText style={[link, styles.link, styles.reset, style]} {...unused} />
)
