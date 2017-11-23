// @flow
// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
    style: number,
    unused?: {}
}

const CardPlaceholder = ({ style, ...unused }: Props) => (
    <View style={[styles.container, style]} />
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default CardPlaceholder
