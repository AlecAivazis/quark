// external imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FreeState extends Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
        initial: PropTypes.any,
    }

    static defaultProps = {
        initial: null
    }

    constructor(props, ...args) {
        // create this
        super(props, ...args)
        // base the state on the initial prop
        this.state = {
            val: props.initial,
        }
    }

    render() {
        return this.props.children({
            state: this.state.val,
            set: val => this.setState({val}),
        })
    }
}

export default FreeState
