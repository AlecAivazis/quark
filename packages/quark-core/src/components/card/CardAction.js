// @flow
// external imports
import React from 'react'
import { View, Text, StyleSheet, ViewProperties } from 'react-native'
// local imports
import { BaseButtonWithText } from '../buttons'
import { GetTheme } from 'quark-core'

const CardAction = ({ style, ...unused }: ViewProperties) => (
    <GetTheme>
        {({ grey2, grey1, primaryColor }) => (
            <BaseButtonWithText
                defaultColor="white"
                activeColor={grey1}
                textColor={primaryColor}
                style={[styles.container, { borderTopColor: grey2 }, style]}
                constrainSize={false}
                {...unused}
            />
        )}
    </GetTheme>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'flex-end',
        borderRadius: 0,
        borderStyle: 'solid',
        borderTopWidth: 1
    }
})

export default CardAction
