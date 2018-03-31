// @flow
// external imports
import * as React from 'react'
import { View, TextInput, StyleSheet } from 'react-native-web'
import { GetTheme, BooleanState } from 'quark-web'
// local imports
import styles from './styles'

type Props = {
    value: string,
    onChange: (str: string, evt: Event) => void
} & { [key: string]: string }

const Input = ({ value, onChange, error, style, ...unused }: Props) => (
    <BooleanState>
        {({ state: focused, toggle: toggleFocus }) => (
            <GetTheme>
                {({ grey3, grey2, primaryColor }) => {
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
                        <View style={[containerStyle, style]}>
                            <TextInput
                                {...unused}
                                onFocus={toggleFocus}
                                onBlur={toggleFocus}
                                value={value || ''}
                                placeholderTextColor={grey3}
                                onChange={onChange ? evt => onChange(evt.target.value, evt) : null}
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
