// @flow
// external imports
import * as React from 'react'
import { TextInput } from 'react-native'
// local imports
import styles from './styles'
import { GetTheme } from 'quark-core'

type Props = {
    value: string,
    onChange: (string, ?Event) => void,
    icon: React.Node
} & { [key: string]: string }

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
