// @flow
// external imports
import React from 'react'
import { TextInput, TextInputProperties } from 'react-native'
// local imports
import styles from './styles'

const Input = ({ style, ...unused }: TextInputProperties) => (
    <TextInput style={[styles.input, style]} {...unused} />
)

export default Input
