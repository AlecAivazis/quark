// @flow
// external imports
import React from 'react'
import { TextInput, TextInputProperties } from 'react-native'
// local imports
import styles from './styles'
import { GetTheme } from 'quark-core'

const Input = ({ style, ...unused }: TextInputProperties) => (
    <GetTheme>
        {({ grey2, white }) => (
            <TextInput
                style={[styles.input, { borderColor: grey2, backgroundColor: white }, style]}
                {...unused}
            />
        )}
    </GetTheme>
)

export default Input
