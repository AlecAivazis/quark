import { baseDim } from './dims'

const reset = {
    margin: 0
}

export const primaryFont = {}

export const h1 = {
    ...primaryFont,
    ...reset,
    fontSize: 45,
    fontWeight: 400,
    marginBottom: 4 * baseDim
}

export const h2 = {
    ...primaryFont,
    ...reset,
    fontSize: 30,
    fontWeight: 400,
    marginBottom: 3 * baseDim
}

export const h3 = {
    ...primaryFont,
    ...reset,
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 2 * baseDim
}

export const title = {
    ...primaryFont,
    ...reset,
    fontSize: 18,
    fontWeight: 400,
    marginBottom: 1 * baseDim
}

export const subtitle = {
    ...primaryFont,
    ...reset,
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 1 * baseDim
}

export const copy = {
    ...primaryFont,
    fontWeight: 100,
    fontSize: 14
}

export const link = {
    ...primaryFont,
    fontWeight: 100,
    fontSize: 14
}
