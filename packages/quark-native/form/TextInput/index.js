var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// external imports
import React from 'react';
import TextInput from 'react-native-web/dist/components/TextInput';
// local imports

import styles from './styles';

const Input = (_ref) => {
    let { style } = _ref,
        unused = _objectWithoutProperties(_ref, ['style']);

    return React.createElement(TextInput, _extends({ style: [styles.input, style] }, unused));
};

export default Input;