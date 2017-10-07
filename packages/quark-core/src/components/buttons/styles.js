// external imports
import { StyleSheet } from 'react-native'
// local imports
import { baseDim } from '../../styles'

export const containerSizes = StyleSheet.create({
    small: {
        height: 7 * baseDim
    },
    medium: {
        height: 10 * baseDim
    },
    large: {
        height: 14 * baseDim
    }
})

export const sizeConstraints = StyleSheet.create({
    small: {
        fontSize: 14,
        minWidth: 100,
        maxWidth: 210
    },
    medium: {
        minWidth: 120,
        maxWidth: 240
    },
    large: {
        minWidth: 150,
        maxWidth: 260
    }
})

export const textSizes = StyleSheet.create({
    small: {
        fontSize: 14
    },
    medium: {
        fontSize: 16
    },
    large: {
        fontSize: 18
    }
})

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        overflow: 'hidden'
    }
})
