// @flow
// external imports
import * as React from 'react'
import { FlexRow, Text, IconX, Timeout } from 'quark-core'
import { View, Animated, TouchableWithoutFeedback } from 'react-native-web'
import type { FlexContainerProps } from 'quark-core'
// local imports
import styles from './styles'

export type AlertProps = {
    icon: React.ReactNode,
    content: React.ReactNode,
    message: string,
    iconStyle: { [key: string]: any },
    style: { [key: string]: any },
    messageStyle: { [key: string]: any },
    dismissable?: boolean,
    onDismiss: () => void
} & FlexContainerProps

type State = {
    opacity: any,
    margin: any
}

class BaseAlert extends React.Component<AlertProps> {
    static defaultProps = {
        dismissable: true
    }

    state = {
        opacity: new Animated.Value(0),
        marginTop: new Animated.Value(-16),
        timeout: null
    }

    componentDidMount() {
        // start the animation
        Animated.parallel([
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 250
            }),
            Animated.timing(this.state.marginTop, {
                toValue: 0,
                duration: 250
            })
        ]).start()

        // if the alert is dismissable
        if (this.props.dismissable) {
            // save a timeout that dismisses the alert
            this.setState({
                timeout: setTimeout(this._dismiss, this._delay)
            })
        }
    }

    _dismiss = () => {
        // clear the dismiss timeout
        clearTimeout(this.state.timeout)

        // start the animation
        Animated.parallel([
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 250
            }),
            Animated.timing(this.state.marginTop, {
                toValue: -16,
                duration: 250
            })
        ]).start(this.props.onDismiss)
    }

    get _delay() {
        return 10000
    }

    render() {
        const {
            icon,
            content,
            iconStyle,
            message,
            messageStyle,
            style,
            dismissable,
            ...unused
        } = this.props

        // clean up unused props
        Reflect.deleteProperty(unused, 'onDismiss')

        return (
            <>
                <Animated.View
                    style={{
                        ...styles.container,
                        ...style,
                        opacity: this.state.opacity,
                        marginTop: this.state.marginTop
                    }}
                    {...unused}
                >
                    <div
                        onMouseEnter={() => {
                            clearTimeout(this.state.timeout)
                            this.setState({ timeout: null })
                        }}
                        onMouseLeave={() => {
                            if (this.props.dismissable) {
                                this.setState({
                                    timeout: setTimeout(this._dismiss, this._delay)
                                })
                            }
                        }}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <View style={{ ...styles.iconContainer, ...iconStyle }}>{icon}</View>
                        <FlexRow alignItems="center" grow={1} style={styles.contentContainer}>
                            {message ? (
                                <Text style={{ ...styles.messageStyle, ...messageStyle }}>
                                    {message}
                                </Text>
                            ) : (
                                content
                            )}
                        </FlexRow>
                        <div onClick={this._dismiss}>
                            <IconX style={styles.closeIcon} />
                        </div>
                    </div>
                </Animated.View>
            </>
        )
    }
}

export default BaseAlert
