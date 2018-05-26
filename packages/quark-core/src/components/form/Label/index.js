// @flow
// external imports
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import type { ViewPropTypes } from 'react-native'
// local imports
import { Text, GetTheme } from 'quark-core'

type Props = ViewPropTypes & {
    textStyle?: {},
    value: string,
    description?: string,
    error?: boolean
}

const Label = ({ children, value, textStyle, description, error = false, ...unused }: Props) => (
    <GetTheme>
        {({ red }) => (
            <View {...unused}>
                <View style={styles.labelContainer}>
                    <Text
                        style={{
                            ...styles.labelText,
                            ...textStyle,
                            ...(error ? { color: red } : {})
                        }}
                    >
                        {value}
                    </Text>
                </View>
                {children}
                <View style={styles.descriptionContainer}>
                    <Text
                        style={{
                            ...styles.descriptionText,
                            ...(error ? { color: red } : {})
                        }}
                    >
                        {description}
                    </Text>
                </View>
            </View>
        )}
    </GetTheme>
)

const styles = {
    container: {},
    labelContainer: {
        marginBottom: 8
    },
    descriptionContainer: {
        marginTop: 5
    },
    labelText: {
        fontWeight: '500',
        fontSize: 14
    },
    descriptionText: {
        fontSize: 13
    }
}

export default Label
