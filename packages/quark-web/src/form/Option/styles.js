// @flow
import { baseDim, grey1, grey2, primaryColor } from 'quark-web/styles'

export default {
    container: {
        display: 'flex',
        textAlign: 'left',
        padding: 2.5 * baseDim,
        paddingLeft: 2.5 * baseDim,
        cursor: 'pointer'
    },
    selected: {
        color: primaryColor
    },
    active: {
        backgroundColor: grey1
    },
    disabled: {
        color: grey2
    }
}
