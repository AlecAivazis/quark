import { baseDim } from './dims'
import { grey5, primaryColor } from './colors'

export const primaryFont = {
    fontWeight: '300',
    color: grey5
}

export const h1 = {
    ...primaryFont,
    fontSize: 45
}

export const h2 = {
    ...primaryFont,
    fontSize: 30
}

export const h3 = {
    ...primaryFont,
    fontSize: 24
}

export const title = {
    ...primaryFont,
    fontSize: 18
}

export const subtitle = {
    ...primaryFont,
    fontSize: 14
}

export const text = {
    ...primaryFont,
    fontWeight: 100,
    fontSize: 14
}

export const link = {
    ...primaryFont,
    fontWeight: 100,
    fontSize: 14
}

export const linkActive = {
    ...link,
    color: primaryColor
}
