// external imports
import { Platform } from 'react-native'
// local imports
import { baseDim } from './dims'
import { grey5, primaryColor } from './colors'

export const primaryFont = fontSize => ({
    fontWeight: '500',
    fontSize,
    lineHeight: Platform.OS === 'web' ? 1.3 : 1.3 * fontSize,
    fontFamily:
        Platform.OS === 'web'
            ? '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            : null,
    color: grey5
})

export const h1 = {
    ...primaryFont(23)
}

export const h2 = {
    ...primaryFont(20)
}

export const h3 = {
    ...primaryFont(18)
}

export const title = {
    ...primaryFont(16)
}

export const subtitle = {
    ...primaryFont(14)
}

export const text = {
    ...primaryFont(14),
    fontWeight: '300'
}

export const link = {
    ...primaryFont(14),
    fontWeight: '300'
}

export const linkActive = {
    ...primaryFont(14),
    ...link,
    fontWeight: '300'
}

export const monospace = {
    ...primaryFont(14),
    fontFamily: 'monospace',
    fontWeight: '300'
}
