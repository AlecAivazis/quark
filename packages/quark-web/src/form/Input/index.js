// @flow
// external imports
import * as React from 'react'
import { View, TextInput } from 'react-native-web'
import type { TextInputProps } from 'react-native-web'
import { GetTheme, BooleanState } from 'quark-web'
// local imports
import styles from './styles'

type Props = {
    value: string,
    onChange: (val, Event) => void
} & TextInputProps

const Input = ({ value, onChange, error, ...unused }: Props) => (
    <BooleanState>
        {({ state: focused, toggle: toggleFocus }) => (
            <GetTheme>
                {({ primaryColor, grey2 }) => {
                    // the style to apply to the element
                    const containerStyle = {
                        ...styles.container
                    }

                    // if we are focused
                    if (focused) {
                        Object.assign(containerStyle, {
                            borderColor: primaryColor
                        })
                    } else {
                        Object.assign(containerStyle, {
                            borderColor: grey2
                        })
                    }

                    // render a stylable input
                    return (
                        <View style={containerStyle}>
                            <TextInput
                                {...unused}
                                onFocus={toggleFocus}
                                onBlur={toggleFocus}
                                value={value || (onChange ? '' : undefined)}
                                onChange={evt => onChange(evt.target.value, evt)}
                                style={styles.input}
                            />
                        </View>
                    )
                }}
            </GetTheme>
        )}
    </BooleanState>
)

export default Input
