'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _StyleSheet = require('react-native-web/dist/apis/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _styles = require('quark-core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// external imports
exports.default = _StyleSheet2.default.create({
    input: {
        borderWidth: 1,
        borderColor: _styles.grey2,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 36,
        paddingLeft: 12,
        fontSize: 14
    }
});
// local imports