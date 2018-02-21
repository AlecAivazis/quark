// @flow
// external imports
import React from 'react'

export type IntervalProps = {
    children: () => void,
    interval: number
}

type State = {
    interval: number
}

class Interval extends React.Component<IntervalProps, State> {
    state = {
        interval: 0
    }

    componentDidMount = () =>
        this.setState({ interval: setInterval(this.props.children, this.props.interval) })

    componentWillUnmount = () => clearInterval(this.state.interval)

    render = () => null
}

export default Interval
