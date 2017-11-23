// @flow
// external imports
import React from 'react'
import {
    Modal,
    TouchableWithoutFeedback,
    View,
    ViewProperties
} from 'react-native'
import { Card } from 'quark-core'
// local imports
import styles from './styles'

type Props = ViewProperties & {
    visible: boolean
}

const Overlay = ({ toggle, children, visible }: Props) =>
    visible && (
        <Modal transparent={true}>
            {/* the click away */}
            <TouchableWithoutFeedback onPress={toggle}>
                <View style={styles.background}>
                    <Card style={styles.content}>
                        <TouchableWithoutFeedback>
                            <View style={{ flex: 1 }}>{children}</View>
                        </TouchableWithoutFeedback>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )

export default Overlay
