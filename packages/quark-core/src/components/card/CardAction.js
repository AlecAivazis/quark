// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// local imports
import { BaseButtonWithText } from '../buttons'
import { primaryColor, grey1, grey2 } from '~/styles'

const CardAction = ({ style, ...unused }) => (
    <BaseButtonWithText
        defaultColor="white"
        activeColor={grey1}
        textColor={primaryColor}
        style={[styles.container, style]}
        constrainSize={false}
        {...unused}
    />
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'flex-end',
        borderRadius: 0,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: grey2
    }
})

export default CardAction
