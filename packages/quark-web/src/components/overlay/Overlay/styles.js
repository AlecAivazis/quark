import { boxShadow } from 'quark-web/styles'

export default {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'flex-start',
        'background-color': 'rgba(55, 55, 58, .67)'
    },
    content: {
        width: 480,
        backgroundColor: 'white',
        boxShadow,
        borderRadius: 3,
        padding: 30,
        marginTop: 50,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column'
    }
}
