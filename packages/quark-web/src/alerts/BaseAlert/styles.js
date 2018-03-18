import { baseDim, blue } from 'quark-core/styles'

export default {
    container: {
        width: '100%',
        paddingTop: 4 * baseDim,
        paddingBottom: 4 * baseDim,
        paddingLeft: 5 * baseDim,
        paddingRight: 5 * baseDim,
        borderRadius: 2,
        backgroundColor: blue
    },
    contentContainer: {
        marginRight: 8
    },
    iconContainer: {
        marginRight: 20
    },
    messageStyle: {
        color: 'white'
    },
    closeIcon: {
        width: 24,
        height: 24,
        cursor: 'pointer',
        color: 'white'
    }
}
