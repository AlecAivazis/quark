// @flow
// external imports
import * as React from 'react'
import { FlexRow, Text, IconX } from 'quark-core'
import { View } from 'react-native-web'
import type { FlexContainerProps } from 'quark-core'
// local imports
import styles from './styles'

export type AlertProps = {
    icon: React.ReactNode,
    content: React.ReactNode,
    message: string,
    iconStyle: { [key: string]: any },
    style: { [key: string]: any },
    messageStyle: { [key: string]: any }
} & FlexContainerProps

export default ({
    icon,
    content,
    iconStyle,
    message,
    messageStyle,
    style,
    ...unused
}: AlertProps) => (
    <FlexRow
        style={{ ...styles.container, ...style }}
        alignItems="center"
        justifyContent="space-between"
        {...unused}
    >
        <FlexRow alignItems="center">
            <View style={{ ...styles.iconContainer, ...iconStyle }}>{icon}</View>
            <FlexRow alignItems="center" style={styles.contentContainer}>
                {message ? (
                    <Text style={{ ...styles.messageStyle, ...messageStyle }}>{message}</Text>
                ) : (
                    content
                )}
            </FlexRow>
        </FlexRow>
        <IconX style={styles.closeIcon} />
    </FlexRow>
)
