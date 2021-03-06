// @flow
// external imports
import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// local imports
import { H2 } from '../../typography'
import { baseDim, grey5 } from 'quark-core/styles'

type Props = {
    divider?: React.Node,
    style?: { [key: string]: string },
    children: React.Node
}

const Breadcrumbs = ({ style, children: childrenProp, divider, ...unused }: Props) => {
    const children = React.Children.toArray(childrenProp)

    // the divider between elements
    const divide = divider || <Text style={styles.divider}>></Text>

    // add the divider after every child
    let childs = children.map((child, i) => (
        <View style={styles.level} key={i}>
            <View>{child}</View>
            <View style={styles.dividerContainer}>{i !== children.length - 1 && divide}</View>
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
