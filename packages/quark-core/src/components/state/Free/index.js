// @flow
// external imports
import * as React from 'react'
import PropTypes from 'prop-types'

type Props = {
    children: RenderPropPayload => React.Node,
    initial: any
}

type RenderPropPayload = {
    state: any,
    set: any => void
}

class FreeState extends React.Component<Props> {
    static defaultProps = {
        initial: null
    }

    constructor(props, ...args) {
        // create this
        super(props, ...args)
        // base the state on the initial prop
        this.state = {
            val: props.initial
        }
    }

    render() {
        return this.props.children({
            state: this.state.val,
            set: val => this.setState({ val })
        })
    }
}

export default FreeState
