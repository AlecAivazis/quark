// @flow
// external imports
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import type { ViewPropTypes } from 'react-native'
// local imports
import { Text } from 'quark-core'

type Props = ViewPropTypes & {
    textStyle?: {},
    value: string,
    description?: string,
    error?: boolean
}
// a context provider for the error state of the label
// export const LabelErrorContext = React.createContext(false)

const Label = ({ children, value, textStyle, description, error = false, ...unused }: Props) => (
    <View {...unused}>
        <View style={styles.labelContainer}>
            <Text style={{ ...styles.labelText, ...textStyle }}>{value}</Text>
        </View>
        {children}
        <View>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {},
    labelContainer: {
        marginBottom: 8
    },
    labelText: {
        fontWeight: '600',
        fontSize: 14
    }
})

export default Label
