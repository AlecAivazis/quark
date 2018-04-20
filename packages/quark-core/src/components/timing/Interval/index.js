// @flow
// external imports
import React from 'react'

export type IntervalProps = {
    children: () => void,
    interval: number
}

type State = {
    interval: ?IntervalID
}

class Interval extends React.Component<IntervalProps, State> {
    state = {
        interval: null
    }

    static defaultProps = {
        interval: 5000
    }

    componentDidMount = () =>
        this.setState({ interval: setInterval(this.props.children, this.props.interval) })

    componentWillUnmount = () => this.state.interval && clearInterval(this.state.interval)

    render = () => null
}

export default Interval
