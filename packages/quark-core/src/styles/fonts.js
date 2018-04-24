import { baseDim } from './dims'
import { grey5, primaryColor } from './colors'

export const primaryFont = {
    fontWeight: '300',
    lineHeight: '1.3',
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    color: grey5
}

export const h1 = {
    ...primaryFont,
    fontSize: 23,
    fontWeight: '500'
}

export const h2 = {
    ...primaryFont,
    fontSize: 20,
    fontWeight: '500'
}

export const h3 = {
    ...primaryFont,
    fontSize: 18,
    fontWeight: '500'
}

export const title = {
    ...primaryFont,
    fontWeight: '500',
    fontSize: 16
}

export const subtitle = {
    ...primaryFont,
    fontWeight: '500',
    fontSize: 14
}

export const text = {
    ...primaryFont,
    fontSize: 14
}

export const link = {
    ...primaryFont,
    fontSize: 14
}

export const linkActive = {
    ...link
}
