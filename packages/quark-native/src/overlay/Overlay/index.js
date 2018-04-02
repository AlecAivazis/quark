// @flow
// external imports
import * as React from 'react'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'
import { Card } from 'quark-core'
// local imports
import styles from './styles'

type Props = {
    visible: boolean,
    children: React.Element<any>,
    toggle: () => void
}

const Overlay = ({ toggle, children, visible }: Props) =>
    visible ? (
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
    ) : null

export default Overlay
