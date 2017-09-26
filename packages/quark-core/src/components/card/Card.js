// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { grey2 } from '../../styles'

const Card = ({style, ...unused}) => (
    <View style={[styles.container, style]} {...unused}/>
)

const styles = StyleSheet.create({
    container: {
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: grey2,
    }
})

export default Card
