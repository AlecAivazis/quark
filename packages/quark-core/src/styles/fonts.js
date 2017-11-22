import { baseDim } from './dims'

const reset = {}

export const primaryFont = {
    fontWeight: '300'
}

export const h1 = {
    ...primaryFont,
    ...reset,
    fontSize: 45
}

export const h2 = {
    ...primaryFont,
    ...reset,
    fontSize: 30
}

export const h3 = {
    ...primaryFont,
    ...reset,
    fontSize: 24
}

export const title = {
    ...primaryFont,
    ...reset,
    fontSize: 18
}

export const subtitle = {
    ...primaryFont,
    ...reset,
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
