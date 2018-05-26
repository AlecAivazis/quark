// @flow
// external imports
import React from 'react'
import { Animated } from 'react-native'
import { Svg, Circle } from 'svgs'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

// the space between circles
const gap = 20

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
            radii: [...new Array(props.nBubbles)].map(() => new Animated.Value(this.props.radius))
        }
    }

    get _gap() {
        return this.props.radius
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
                        toValue: this.props.radius,
                        duration: 500
                    })
                ])
            ).start()
        })
    }

    render() {
        const { radius: r, nBubbles } = this.props
        return (
            <Svg height={2 * r} width={2 * nBubbles * r + (nBubbles - 1) * this._gap}>
                {this.state.radii.map((animatedValue, i) => (
                    <AnimatedCircle
                        cx={r + i * (2 * r + this._gap)}
                        cy={r}
                        r={animatedValue}
                        fill={this.props.color}
                    />
                ))}
            </Svg>
        )
    }
}

export default LoaderBubbles
