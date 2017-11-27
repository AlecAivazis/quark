'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextInput = require('react-native-web/dist/components/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // external imports

// local imports


var Input = function Input(_ref) {
    var style = _ref.style,
        unused = _objectWithoutProperties(_ref, ['style']);

    return _react2.default.createElement(_TextInput2.default, _extends({ style: [_styles2.default.input, style] }, unused));
};

exports.default = Input;