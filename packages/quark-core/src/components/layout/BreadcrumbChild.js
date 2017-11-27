// @flow
// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { grey1, grey5, primaryColor, baseDim } from 'quark-core/styles'
import { text, h3 } from 'quark-core/styles'
import { SecondaryButton } from '../buttons'
import type { TextButtonProps } from '../buttons/Text'

type BreadcrumbChildProps = TextButtonProps & {
    active?: boolean
}

const BreadcrumbChild = ({ active, ...unused }: BreadcrumbChildProps) => (
    <SecondaryButton
        textColor={active ? primaryColor : grey5}
        defaultColor="white"
        activeColor={grey1}
        textStyle={text}
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
