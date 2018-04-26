// the width of the sidebar
const sidebarWidth = 292

export default {
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row'
    },
    content: {
        backgroundColor: 'white',
        paddingTop: 32,
        paddingLeft: 32,
        paddingRight: 32,
        position: 'absolute',
        left: sidebarWidth,
        top: 0,
        bottom: 0,
        right: 0,
        paddingBottom: 40,
        overflowY: 'auto'
    },
    sidebar: {
        width: sidebarWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0
    }
}
