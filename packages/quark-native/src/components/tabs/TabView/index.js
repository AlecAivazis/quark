// @flow
// external imports
import * as React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
// local imports
import { baseDim } from 'quark-core/styles'
import TabBar from '../TabBar'

type Props = {
    data: { [key: string]: any }[],
    barStyle: { [key: string]: any },
    tabStyle: { [key: string]: any },
    style: { [key: string]: any },
    children: ({ [key: string]: any }) => React.Node,
    numTabs?: number
}

type State = {
    selected: number
}

class TabView extends React.Component<Props, State> {
    static propTypes = {
        data: PropTypes.array.isRequired
    }

    _keyCache: { [key: string]: number }

    state = {
        // the current selection
        selected: 0
    }

    constructor(props: Props, ...args: any[]) {
        // instantiate this
        super(props, ...args)
        // we need to cache category key lookup
        this._keyCache = {}

        // look for the tab with the matching key
        for (let i = 0; i < props.data.length; i++) {
            // the data point
            const datum = props.data[i]

            // save the index of the key
            this._keyCache[datum.key] = i
        }
    }

    _selectTab(key: string) {
        // keep track of the new selection
        this.setState({ selected: this._keyCache[key] })
    }

    render() {
        const { style, children, data, tabStyle, barStyle, numTabs, ...unused } = this.props

        return (
            <View style={[styles.container, style]}>
                <TabBar
                    selected={this.state.selected}
                    selectTab={this._selectTab.bind(this)}
                    style={barStyle}
                    tabStyle={tabStyle}
                >
                    {data}
                </TabBar>
                <View style={styles.content}>{children(this.props.data[this.state.selected])}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1
    },
    tab: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        padding: 4 * baseDim
    }
})

export default TabView
