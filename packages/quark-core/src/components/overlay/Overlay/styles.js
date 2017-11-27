// external imports
import { StyleSheet } from 'react-native'
// local imports
import { grey5, grey1 } from 'quark-core/styles'

export default StyleSheet.create({
    background: {
        backgroundColor: 'rgba(55, 55, 58, .67)',
        flex: 1
    },
    content: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
        width: '80%',
        height: 600,
        flex: 0,
        shadowColor: grey5,
        backgroundColor: grey1
    }
})
