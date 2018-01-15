import { grey2 } from 'quark-web/styles'

export const placeholderColor = grey2

export default {
    container: {
        borderRadius: 4,
        borderWidth: 1,
        height: 32,
        transitionProperty: 'border',
        transitionDuration: '150ms',
        transitionTimingFunction: 'ease-in-out',
        height: 40
    },
    input: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        flexGrow: 1,
        outline: 'none',
        padding: 10,
        resize: 'none',
        fontFamily: 'Helvetica Neue'
    }
}
