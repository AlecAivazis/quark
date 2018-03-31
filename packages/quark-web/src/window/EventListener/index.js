// @flow
// external imports
import PropTypes from 'prop-types'
import * as React from 'react'

type Props = {
    event: string,
    children: (evt: Event) => any,
    filter?: (evt: Event) => boolean
}

class EventHandler extends React.Component<Props> {
    _onEvent = (evt: Event) => this._filter(evt) && this.props.children(evt)

    componentDidMount() {
        window.addEventListener(this.props.event, this._onEvent)
    }

    componentWillReceiveProps() {
        // remove the old event listener
        window.removeEventListener(this.props.event, this._onEvent)
        // and add the new one
        window.addEventListener(this.props.event, this._onEvent)
    }

    componentWillUnmount() {
        window.removeEventListener(this.props.event, this._onEvent)
    }

    render() {
        return null
    }

    // default props
    get _filter(): (evt: Event) => boolean {
        return this.props.filter || (evt => true)
    }
}

export default EventHandler
