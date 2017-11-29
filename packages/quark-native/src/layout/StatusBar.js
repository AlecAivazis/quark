// @flow
// external imports
import React from 'react'
import { View, StatusBar as NativeBar, StyleSheet, Platform } from 'react-native'
import type { StatusBarProperties } from 'react-native'

type StatusBarProps = StatusBarProperties & { style: { [x: string]: any } }

const StatusBar = ({ style, ...unused }: StatusBarProps) => (
    <NativeBar {...{ ...style, ...styles.container }} {...unused} />
)

// not using StyleSheet here so we can merge the provided backgroundColor with a default and
// figure out which to send to the native element
const styles = {
    container: {}
}

export default StatusBar
