// @flow
// external imports
import * as React from 'react'
import { View, Text, StyleSheet, ViewProperties } from 'react-native'
// local imports
import { H2 } from '..'
import { baseDim, grey5 } from 'quark-core/styles'

type Props = {
    divider: React.Node
}

const Breadcrumbs = ({
    style,
    children,
    divider = <Text style={styles.divider}>></Text>,
    ...unused
}: ViewProperties & Props) => {
    // add the divider after every child
    let childs = React.Children.map(children, (child, i) => (
        <View style={styles.level} key={i}>
            <View>{child}</View>
            <View style={styles.dividerContainer}>{i !== children.length - 1 && divider}</View>
        </View>
    ))
    return (
        <View style={[styles.container, style]} {...unused}>
            {childs}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    level: {
        flexDirection: 'row'
    },
    dividerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2 * baseDim,
        marginRight: 2 * baseDim
    },
    divider: {
        fontSize: 6 * baseDim,
        color: grey5
    }
})

export default Breadcrumbs
