// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { grey1, grey5, primaryColor, baseDim } from '~/styles'
import { h3 } from '~/styles/text'
import { SecondaryButton } from '../buttons'

const BreadcrumbChild = ({ active, ...unused }) => (
    <SecondaryButton
        textColor={active ? primaryColor : grey5}
        defaultColor="white"
        activeColor={grey1}
        textStyle={styles.text}
        style={styles.button}
        {...unused}
    />
)

const styles = StyleSheet.create({
    text: {
        ...h3,
        marginLeft: 0,
        marginRight: 0,
        fontSize: 20
    },
    button: {
        paddingLeft: 2 * baseDim,
        paddingRight: 2 * baseDim
    }
})

export default BreadcrumbChild
