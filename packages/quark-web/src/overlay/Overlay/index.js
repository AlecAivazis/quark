// @flow
// external imports
import * as React from 'react'
import { Card, ClickAway, Portal } from 'quark-web'
import { View } from 'react-native-web'
import type { ViewPropTypes } from 'react-native-web'
// local imports
import styles from './styles'

type Props = {
    toggle: () => void,
    visible: boolean
} & ViewPropTypes

const Overlay = ({ toggle, visible, ...unused }: Props) =>
    visible ? (
        <Portal id="overlay" style={styles.container}>
            <ClickAway onClick={toggle} style={styles.content}>
                <View {...unused} />
            </ClickAway>
        </Portal>
    ) : null

export default Overlay
