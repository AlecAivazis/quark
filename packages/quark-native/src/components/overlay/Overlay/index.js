// @flow
// external imports
import * as React from 'react'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'
import type { ViewPropTypes } from 'react-native-web'
import { Card } from 'quark-core'
// local imports
import styles from './styles'

type Props = {
    visible: boolean,
    toggle: () => void
} & ViewPropTypes

const Overlay = ({ toggle, visible, ...unused }: Props) =>
    visible ? (
        <Modal transparent={true}>
            {/* the click away */}
            <TouchableWithoutFeedback onPress={toggle}>
                <View style={styles.background}>
                    <Card style={styles.content}>
                        <TouchableWithoutFeedback>
                            <View style={{ flex: 1 }} {...unused} />
                        </TouchableWithoutFeedback>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    ) : null

export default Overlay
