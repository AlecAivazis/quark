// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TabBar as NativeBar } from 'react-native-tab-view'
// local imports
import { baseDim, grey5, primaryColor } from '../../styles'

const TabBar = ({style, ...unused}) => (
    <NativeBar
        style={[styles.container, style]}
        labelStyle={styles.label}
        tabStyle={styles.tab}
        indicatorStyle={styles.indicator}
        getLabelText={({route}) => route.title }
        scrollEnabled={true}
        {...unused}
    />
)

const styles = StyleSheet.create({
    container: {
        paddingLeft: 4 * baseDim,
        paddingTop: 4 * baseDim,
        paddingRight: 4 * baseDim,
        backgroundColor: 'rgba(0,0,0,0)',
        shadowOpacity: 0,
        width: '100%',
        height: 52,
    },
    label: {
        color: grey5,
    },
    tab: {
        flexGrow: 0,
    },
    indicator: {
        backgroundColor: primaryColor,
    }
})

export default TabBar
