// @flow
// external imports
import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native-web'
import type { ViewPropTypes } from 'react-native'

type Props = ViewPropTypes & {
    textStyle?: {},
    value: string,
    description?: string,
    error?: boolean
}

// a context component for the error state of a label
export const ErrorLabelContext = React.createContext('errorLabel')

export const Label = ({
    children,
    value,
    textStyle,
    description,
    error = false,
    ...unused
}: Props) => (
    <View {...unused}>
        <View style={styles.labelContainer}>
            <Text style={[styles.labelText, textStyle]}>{value}</Text>
        </View>
        <ErrorLabelContext.Provider value={error}>{children}</ErrorLabelContext.Provider>
        <View>
            <Text style={[styles.descriptionText]}>{description}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {},
    labelContainer: {
        marginBottom: 8
    },
    labelText: {
        fontWeight: '100',
        fontSize: 18
    }
})
