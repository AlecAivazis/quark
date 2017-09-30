// external imports
import React from 'react'
import { Text as NativeText } from 'react-native'
// local imports
import styles from '~/styles/text'

export const H1 = ({style, ...unused}) => (
    <NativeText style={[styles.h1, style]} {...unused} />
)

export const H2 = ({style, ...unused}) => (
    <NativeText style={[styles.h2, style]} {...unused} />
)

export const H3 = ({style, ...unused}) => (
    <NativeText style={[styles.h3, style]} {...unused} />
)

export const Title = ({style, ...unused}) => (
    <NativeText style={[styles.title, style]} {...unused} />
)

export const Subtitle = ({style, ...unused}) => (
    <NativeText style={[styles.subtitle, style]} {...unused} />
)

export const Text = ({style, ...unused}) => (
    <NativeText style={[styles.copy, {fontSize: 14}, style]} {...unused} />
)

export const Link = ({style, ...unused}) => (
    <NativeText style={[styles.link, style]} {...unused} />
)

export const Monospace = ({style, ...unused}) => (
    <NativeText style={[styles.link, style]} {...unused} />
)
