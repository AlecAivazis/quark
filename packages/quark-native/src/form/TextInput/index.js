// external imports
import React from 'react'
import { TextInput } from 'react-native'
// local imports
import styles from './styles'

const Input = ({ style, ...unused }) => (
    <TextInput style={[styles.input, style]} {...unused} />
)

export default Input
