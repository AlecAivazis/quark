// @flow
// external imports
import React from 'react'
import { TextInput } from 'react-native'
// local imports
import styles from './styles'
import { GetTheme } from 'quark-core'

type Props = { [key: string]: string }

const Input = ({ style, ...unused }: Props) => (
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
