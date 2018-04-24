// @flow
// external imports
import * as React from 'react'
import { ScrollView, View, StyleSheet, Text, FlatList } from 'react-native'
import type { ViewPropTypes } from 'react-native-web'
// local imports
import { Button, GetTheme } from 'quark-core'
import { baseDim, grey5, primaryColor } from 'quark-core/styles'

// the margin between tabs
const tabMargin = 12

type Props = {
    numTabs?: number,
    selected: number,
    selectTab: string => void,
    tabStyle: { [key: string]: any },
    children: { [key: string]: any }[]
} & ViewPropTypes

type State = {
    tabWidth: ?number,
    scroll: boolean
}

type LayoutEvent = {
    nativeEvent: {
        layout: {
            width: number
        }
    }
}

class TabBar extends React.Component<Props, State> {
    state = {
        tabWidth: null,
        scroll: false
    }

    static defaultProps = {
        numTabs: 5
    }

    // we wait a frame before showing the tab bar to calculate the layout
    _onLayout = ({ nativeEvent: { layout } }: LayoutEvent) => {
        // the number of tabs to show
        const n = this.props.numTabs || 0
        // the total width of the bar
        const w = layout.width

        // the width of a single tab
        const tabWidth = Math.round((w - n * tabMargin) / n)
        // compute wether we have to scroll to show the tabs
        const scroll = w < tabWidth * n

        // make sure the tabs are wide enough to fit the specified amount
        this.setState({
            tabWidth,
            scroll
        })
    }

    get _scrollableBar() {
        const { selected, selectTab, children, ...unused } = this.props

        Reflect.deleteProperty(unused, 'numTabs')

        return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={children}
                extraData={selected}
                renderItem={({ item: { key }, index }) => (
                    // disable-flow
                    <this._Tab index={index}>{key}</this._Tab>
                )}
                {...unused}
            />
        )
    }

    get _fixedBar() {
        return this.props.children.map(({ key }, i) => (
            // disable-flow
            <this._Tab index={i} key={key}>
                {key}
                // disable-flow
            </this._Tab>
        ))
    }

    _Tab = ({ index, children }: { index: number, children: string }) => {
        const { selected, selectTab, tabStyle } = this.props

        return (
            <GetTheme>
                {({ primaryColor }) => (
                    <Button
                        style={[{ width: this.state.tabWidth }, styles.tab, tabStyle]}
                        onPress={() => selectTab(children)}
                        disabled={index === selected}
                    >
                        <Text
                            style={[styles.tabText, index === selected && { color: primaryColor }]}
                        >
                            {children}
                        </Text>
                    </Button>
                )}
            </GetTheme>
        )
    }

    render() {
        const { style } = this.props

        // figure out the right bar to show
        const bar = this.state.scroll ? this._scrollableBar : this._fixedBar

        return (
            <View style={[styles.container, style]} onLayout={this._onLayout}>
                {this.state.tabWidth && bar}
            </View>
        )
    }
}

TabBar.defaultProps = {
    numTabs: 5
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 64,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        position: 'relative'
    },
    tab: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TabBar
