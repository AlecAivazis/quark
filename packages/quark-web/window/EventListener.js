
// external imports
import PropTypes from 'prop-types';
import * as React from 'react';

class EventHandler extends React.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this._onEvent = evt => this._filter(evt) && this.props.children(evt), _temp;
    }

    componentDidMount() {
        window.addEventListener(this.props.event, this._onEvent);
    }

    componentWillReceiveProps() {
        // remove the old event listener
        window.removeEventListener(this.props.event, this._onEvent);
        // and add the new one
        window.addEventListener(this.props.event, this._onEvent);
    }

    componentWillUnmount() {
        window.removeEventListener(this.props.event, this._onEvent);
    }

    render() {
        return null;
    }

    // default props
    get _filter() {
        return this.props.filter || (evt => true);
    }
}

export default EventHandler;