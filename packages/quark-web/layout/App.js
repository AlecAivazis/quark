var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// external imports
import React from 'react';
import View from 'react-native-web/dist/components/View';
import StyleSheet from 'react-native-web/dist/apis/StyleSheet';
import { ViewProperties } from 'react-native-web';


const App = (_ref) => {
    let { style } = _ref,
        unused = _objectWithoutProperties(_ref, ['style']);

    return React.createElement(View, _extends({ style: [style, styles.container] }, unused));
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;