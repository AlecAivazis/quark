// @flow
// external imports
import * as React from 'react'
import { Text, StyleSheet, Animated, Easing, TouchableWithoutFeedback } from 'react-native'
// local imports
import { baseDim } from 'quark-core/styles'
import { styles, containerSizes, sizeConstraints } from '../styles'

export type ButtonProps = {
    size?: string,
    constrainSize?: boolean,
    defaultColor?: string,
    activeColor?: string,
    disabledColor?: string,
    hoverColor?: string,
    disabled?: boolean,
    disabledStyle?: {},
    onPress?: (...args: Array<any>) => void | Promise<void>,
    onPressIn?: (...args: Array<any>) => void | Promise<void>,
    onPressOut?: (...args: Array<any>) => void | Promise<void>,
    style?: { [key: string]: any },
    children: React.Node
}

type State = {
    animation?: Animated.CompositeAnimation,
    opacity: Animated.Value
}

class BaseButton extends React.Component<ButtonProps, State> {
    static defaultProps = {
        size: 'medium',
        constrainSize: true
    }

    _pressIn = (...args: Array<any>) => {
        // if there is a press handler to deal with
        if (this.props.onPressIn) {
            // call it
            this.props.onPressIn(...args)
        }
        this.setState(
            {
                animation: Animated.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 100
                })
            },
            () => this.state.animation && this.state.animation.start()
        )
    }

    _pressOut = (...arg: Array<any>) => {
        // stop the keypress animation if its running
        // if there is a press handler to deal with
        if (this.props.onPressOut) {
            // call it
            this.props.onPressOut(...arg)
        }

        // start the animation to return to normal state
        Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 150
        }).start()
    }

    _press = (...args: Array<any>) => {
        // if there is a press handler to deal with
        if (this.props.onPress) {
            // call it
            const pressPromise = this.props.onPress(...args)

            // if the press callback returned a promise
            if (pressPromise && pressPromise.then && pressPromise.catch) {
                // set the loading state to true
                this.setState({
                    loading: true
                })

                // when the promise is resolved, set the loading state to false
                pressPromise.then(() => this.setState({ loading: false }))
                // if the promise rejected we should also hide the loading indicator
                pressPromise.catch(() => this.setState({ loading: false }))
            }
        }
    }

    constructor(...args: Array<any>) {
        super(...args)

        // initial state
        this.state = {
            opacity: new Animated.Value(0),
            animation: null
        }
    }

    render() {
        const {
            style,
            children,
            size,
            activeColor,
            constrainSize,
            defaultColor,
            onPress,
            disabled,
            disabledColor,
            ...unused
        } = this.props

        return (
            <TouchableWithoutFeedback
                onPressIn={!disabled ? this._pressIn : null}
                onPressOut={!disabled ? this._pressOut : null}
                onPress={!disabled ? this._press : null}
                accessible={!disabled}
            >
                <Animated.View
                    {...unused}
                    style={[
                        styles.container,
                        containerSizes[size],
                        constrainSize && sizeConstraints[size],
                        disabled && styles.disabled,
                        {
                            backgroundColor: disabled
                                ? disabledColor
                                : this.state.opacity.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [defaultColor, activeColor || defaultColor]
                                  })
                        },
                        style
                    ]}
                >
                    {this.state.loading ? <Text>loading</Text> : children}
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

export default BaseButton
