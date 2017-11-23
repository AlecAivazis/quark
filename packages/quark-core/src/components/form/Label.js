// @flow
// external imports
import React from 'react'
import { View, Text, StyleSheet, ViewProperties } from 'react-native'

type Props = ViewProperties & {
    textStyle?: {},
    value: string
}

const Label = ({ children, value, textStyle, ...unused }: Props) => (
    <View {...unused}>
        <View style={styles.labelContainer}>
            <Text style={[styles.labelText, textStyle]}>{value}</Text>
        </View>
        {children}
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

export default Label
