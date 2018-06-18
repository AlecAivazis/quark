// @flow
// external imports
import React from 'react'
import { Animated } from 'react-native'
// local imports
import { FlexRow } from 'quark-core'

type Props = {
    nBubbles?: number,
    color?: string,
    radius?: number
}

type State = {
    radius: Animated.Value,
    animation?: Animated.CompositeAnimation,
    radii: Animated.Value[]
}

class LoaderBubbles extends React.Component<Props, State> {
    static defaultProps = {
        nBubbles: 3,
        color: '#000000',
        radius: 15
    }

    constructor(props, ...args) {
        super(props, ...args)

        // create an animated value we will modify
        this.state = {
            radii: [...new Array(props.nBubbles)].map(
                () => new Animated.Value(2 * this.props.radius)
            )
        }
    }

    get _gap() {
        return 2 * this.props.radius
    }

    componentDidMount() {
        this.state.radii.map((animatedValue, i) => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(animatedValue, {
                        toValue: 0,
                        duration: 500
                    }),
                    Animated.timing(animatedValue, {
                        toValue: 2 * this.props.radius,
                        duration: 500
                    })
                ])
            ).start()
        })
    }

    render() {
        const { radius: r, nBubbles } = this.props
        return (
            <FlexRow
                alignItems="center"
                justifyContent="space-around"
                style={{
                    height: 2 * r,
                    width: 2 * nBubbles * r + (nBubbles - 1) * this._gap
                }}
            >
                {this.state.radii.map((_, i) => (
                    <Animated.View
                        key={i}
                        style={{
                            borderRadius: '50%',
                            width: this.state.radii[0],
                            height: this.state.radii[0],
                            backgroundColor: this.props.color
                        }}
                    />
                ))}
            </FlexRow>
        )
    }
}

export default LoaderBubbles
