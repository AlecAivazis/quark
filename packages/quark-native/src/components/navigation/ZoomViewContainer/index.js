// @flow
// external imports
import * as React from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'

type BoundingBox = {
    x: number,
    y: number,
    width: number,
    height: number
}

// we pass the bounding box information inline with the data
type BBPayload = BoundingBox & { data?: {} }

type TransitionHandler = (payload: BBPayload) => void

type Props = {
    children: (transitionTo: TransitionHandler) => null,
    style: {},
    unused: {},
    loading: (payload: ViewPayload) => React.Element<any>,
    view: (payload: ViewPayload) => React.Element<any>
}

type State = {
    showView: boolean,
    loading: boolean,
    data: ?{},
    modal: ?BoundingBox,
    viewport: ?BoundingBox,
    origin: ?BoundingBox
}

export type ViewPayload = {
    data: {},
    closeView: () => void,
    openView: (payload: BBPayload) => void
}

const animationDuration = 150

class ZoomGridContainer extends React.Component<Props, State> {
    _root: any

    state = {
        showView: false,
        loading: false,
        data: {},
        viewport: null,
        data: null,
        modal: null,
        origin: null
    }

    componentDidMount() {
        // update the notion of the viewport
        setTimeout(this._updateRootMeasure, 0)
    }

    render() {
        // used props
        const { children, style, ...unused } = this.props
        // the payload to pass the view
        const viewPayload = {
            data: this.state.data || {},
            closeView: this._closeView,
            openView: this._openView
        }
        return (
            <View style={[styles.container, style]} ref={ele => (this._root = ele)}>
                {children(this._openView)}
                {this.state.showView &&
                    this.state.modal && (
                        <Animated.View
                            style={{
                                width: this.state.modal.width,
                                height: this.state.modal.height,
                                top: this.state.modal.x,
                                left: this.state.modal.y,
                                display: 'flex',
                                flexDirection: 'row',
                                position: 'absolute',
                                backgroundColor: 'white'
                            }}
                        >
                            {this.state.loading
                                ? this.props.loading(viewPayload)
                                : this.props.view(viewPayload)}
                        </Animated.View>
                    )}
            </View>
        )
    }

    _openView = ({ data, ...origin }: BBPayload): void => {
        // grab the used state
        const { viewport } = this.state
        // if we haven't computed the viewport yet
        if (!viewport) {
            // don't do anything for now
            // TODO: wait to compute and then execute
            return
        }

        // shift the origin to accomodate the viewport
        const relOrigin = {
            x: origin.x - viewport.x,
            y: origin.y - viewport.y,
            height: origin.height - viewport.height,
            width: origin.width - viewport.width
        }

        // save the user's provided data
        this.setState(
            {
                data,
                origin: relOrigin,
                showView: true,
                loading: true,
                modal: {
                    x: new Animated.Value(origin.x),
                    y: new Animated.Value(origin.y),
                    width: new Animated.Value(origin.width),
                    height: new Animated.Value(origin.height)
                }
            },
            () => {
                const { viewport, modal } = this.state
                // if we haven't computed the viewport yet
                if (!viewport || !modal) {
                    // don't do anything for now
                    // TODO: wait to compute and then execute
                    return
                }

                Animated.parallel([
                    Animated.timing(modal.width, {
                        toValue: viewport.width,
                        duration: animationDuration
                    }),
                    Animated.timing(modal.height, {
                        toValue: viewport.height,
                        duration: animationDuration
                    }),
                    Animated.timing(modal.x, {
                        toValue: 0,
                        duration: animationDuration
                    }),
                    Animated.timing(modal.y, {
                        toValue: 0,
                        duration: animationDuration
                    })
                ]).start(() => this.setState({ loading: false }))
            }
        )
    }

    _closeView = () => {
        this.setState({ loading: true }, () => {
            const { origin, modal } = this.state
            // if we haven't computed the origin yet
            if (!origin || !modal) {
                // don't do anything for now
                // TODO: wait to compute and then execute
                return
            }

            // we have a few things we need to animate at once
            Animated.parallel([
                Animated.timing(modal.width, {
                    toValue: origin.width,
                    duration: animationDuration
                }),
                Animated.timing(modal.height, {
                    toValue: origin.height,
                    duration: animationDuration
                }),
                Animated.timing(modal.x, {
                    toValue: origin.x,
                    duration: animationDuration
                }),
                Animated.timing(modal.y, {
                    toValue: origin.y,
                    duration: animationDuration
                })
            ]).start(() => this.setState({ showView: false }))
        })
    }

    _updateRootMeasure = () => () => {
        this._root.measure((_, __, width, height, x, y) => {
            // save the viewport dimensions
            this.setState({
                viewport: {
                    width,
                    height,
                    x,
                    y
                }
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    }
})

export default ZoomGridContainer
