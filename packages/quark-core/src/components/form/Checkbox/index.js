// @flow
// external imports
import * as React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ViewPropTypes } from 'react-native'
// local imports
import { primaryColor, secondaryColor, grey1, grey3, baseDim } from 'quark-core/styles'

type CheckboxProperties = {
    style: CSSStyleDeclaration,
    children: boolean,
    content: React.Node,
    onPress: () => void
} & ViewPropTypes

const Checkbox = ({ style, children, content, onPress, ...unused }: CheckboxProperties) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View
            {...unused}
            style={[
                styles.container,
                content ? styles.withContent : styles.withoutContent,
                children ? styles.active : styles.inactive,
                style
            ]}
        >
            <Text style={children ? styles.activeText : styles.inactiveText}>{content}</Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    withContent: {
        paddingTop: 2 * baseDim,
        paddingBottom: 2 * baseDim,
        paddingLeft: 2 * baseDim,
        paddingRight: 2 * baseDim
    },
    withoutContent: {
        height: 9 * baseDim,
        width: 9 * baseDim
    },
    active: {
        backgroundColor: secondaryColor,
        borderColor: primaryColor
    },
    activeText: {
        color: primaryColor
    },
    inactive: {
        borderColor: grey3
    },
    inactiveText: {
        color: grey3
    }
})

export default Checkbox
