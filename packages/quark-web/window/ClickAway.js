var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// external imports
import * as React from 'react';
import PropTypes from 'prop-types';
// local imports
import { EventListener } from '.';

class ClickAway extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._callback = evt => this.props.onClick(evt), _temp;
  }

  render() {
    // grab used props
    const _props = this.props,
          { active, children, event, onClick, filter } = _props,
          unused = _objectWithoutProperties(_props, ['active', 'children', 'event', 'onClick', 'filter']);

    const eventFilter = filter || (evt => true);
    // render the component
    return React.createElement(
      'span',
      _extends({ style: { display: 'inline-block' }, ref: ele => this._container = ele }, unused),
      children,
      active && React.createElement(
        EventListener,
        { event: event || 'mousedown' },
        evt => this._container && !this._container.contains(evt.target) && eventFilter(evt) && this._callback(evt)
      )
    );
  }
}

ClickAway.defaultProps = {
  active: true,
  onClick: () => {}
};
export default ClickAway;