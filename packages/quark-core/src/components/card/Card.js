// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewProperties } from 'react-native'
// local imports
import { grey2 } from 'quark-core/styles'

const Card = ({ style, ...unused }: ViewProperties) => (
    <View style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: grey2,
        shadowColor: grey2,
        shadowOpacity: 0.54,
        shadowRadius: 4,
        shadowOffset: { width: 2, height: 2 }
    }
})

export default Card
