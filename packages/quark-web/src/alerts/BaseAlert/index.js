// @flow
// external imports
import * as React from 'react'
import { FlexRow, Text, IconX, Timeout, IconInfo, GetTheme } from 'quark-core'
import { View, Animated, TouchableWithoutFeedback } from 'react-native-web'
import type { FlexContainerProps } from 'quark-core'
// local imports
import styles from './styles'
import duration from './duration'

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
        return this.props.duration || duration(this._content.textContent)
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

        // the icon associated with the alert
        const alertIcon = icon || <IconInfo />

        return (
            <GetTheme>
                {({ blue }) => (
                    <Animated.View
                        style={{
                            backgroundColor: blue,
                            opacity: this.state.opacity,
                            marginTop: this.state.marginTop,
                            ...styles.container,
                            ...style
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
                            <div style={{ marginRight: 20 }}>
                                {React.cloneElement(alertIcon, { style: styles.iconContainer })}
                            </div>
                            <FlexRow alignItems="center" grow={1} style={styles.contentContainer}>
                                <span ref={ele => (this._content = ele)}>
                                    {message ? (
                                        <Text style={{ ...styles.messageStyle, ...messageStyle }}>
                                            {message}
                                        </Text>
                                    ) : (
                                        content
                                    )}
                                </span>
                            </FlexRow>
                            <div onClick={this._dismiss}>
                                <IconX style={styles.closeIcon} />
                            </div>
                        </div>
                    </Animated.View>
                )}
            </GetTheme>
        )
    }
}

export default BaseAlert
