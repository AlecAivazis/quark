// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// local imports
import { H2 } from '..'
import { baseDim, grey5 } from '../../styles'

const Breadcrumbs = ({style, children, ...unused}) => {
    // add the divider after every child
    let childs = children.map((child, i) => (
        <View style={styles.level} key={i}>
            <View>
                {child}
            </View>
            <View style={styles.dividerContainer}>
                {i !== children.length - 1 && <Text style={styles.divider}>></Text>}
            </View>
        </View>
    ))
    return (
        <View style={[styles.container, style]} {...unused} >
            {childs}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    level: {
        flexDirection: 'row',
    },
    dividerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2 * baseDim,
        marginRight: 2 * baseDim,
    },
    divider: {
        fontSize: 6 * baseDim,
        color: grey5,
    },
})

export default Breadcrumbs
