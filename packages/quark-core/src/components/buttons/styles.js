// external imports
import { StyleSheet, Platform } from 'react-native'
// local imports
import { baseDim } from '../../styles'

export const containerSizes = {
    small: {
        height: 7 * baseDim
    },
    medium: {
        height: 10 * baseDim
    },
    large: {
        height: 14 * baseDim
    }
}

export const sizeConstraints = {
    small: {
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
}

export const textSizes = {
    small: {
        fontSize: 14
    },
    medium: {
        fontSize: 16
    },
    large: {
        fontSize: 18
    }
}

export const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        overflow: 'hidden'
    },
    disabled:
        Platform.OS === 'web'
            ? {
                  cursor: 'default'
              }
            : {}
}
