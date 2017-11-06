// external imports
import React from 'react'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'
import { Card } from 'quark-core'
// local imports
import styles from './styles'

const Overlay = ({ toggle, children, visible }) =>
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
