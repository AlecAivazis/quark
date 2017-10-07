// external imports
import { StyleSheet } from 'react-native'
// local imports
import { baseDim, primaryFont } from '../styles'

const reset = {
    margin: 0
}
export default StyleSheet.create({
    h1: {
        ...primaryFont,
        ...reset,
        fontSize: 45,
        marginBottom: 4 * baseDim
    },
    h2: {
        ...primaryFont,
        ...reset,
        fontSize: 30,
        marginBottom: 3 * baseDim
    },
    h3: {
        margin: 0,
        fontSize: 24,
        marginBottom: 3 * baseDim
    },
    title: {
        ...primaryFont,
        ...reset,
        fontSize: 18,
        marginBottom: 2 * baseDim
    },
    subtitle: {
        ...primaryFont,
        ...reset,
        fontSize: 16,
        marginBottom: 1 * baseDim
    },
    text: {
        ...primaryFont,
        fontSize: 14
    },
    link: {
        ...primaryFont,
        fontSize: 14
    }
})
