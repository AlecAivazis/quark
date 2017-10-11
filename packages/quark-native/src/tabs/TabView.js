// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
// local imports
import { baseDim } from 'quark-core/styles'
import TabBar from './TabBar'

class TabView extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }

    state = {
        // the current selection
        selected: 0
    }

    constructor(props, ...args) {
        // instantiate this
        super(props, ...args)
        // we need to cache category key lookup
        this._keyCache = {}

        // look for the tab with the matching key
        for (const i = 0; i < props.data.length; i++) {
            // the data point
            const datum = props.data[i]

            // save the index of the key
            this._keyCache[datum.key] = i
        }
    }

    _selectTab(key) {
        // keep track of the new selection
        this.setState({ selected: this._keyCache[key] })
    }

    render() {
        const { style, children, data, barStyle, numTabs, ...unused } = this.props

        return (
            <View style={[styles.container, style]}>
                <TabBar
                    selected={this.state.selected}
                    selectTab={this._selectTab.bind(this)}
                    style={barStyle}
                >
                    {data}
                </TabBar>
                <View style={styles.content}>
                    {children(this.props.data[this.state.selected])}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        paddingLeft: 4 * baseDim,
        paddingRight: 4 * baseDim,
        paddingBottom: 4 * baseDim
    },
    tab: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1
    }
})

export default TabView
