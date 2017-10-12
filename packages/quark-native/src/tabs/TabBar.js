// external imports
import React from 'react'
import { ScrollView, View, StyleSheet, Text, FlatList } from 'react-native'
// local imports
import { Button } from 'quark-core'
import { baseDim, grey5, primaryColor } from 'quark-core/styles'

// the margin between tabs
const tabMargin = 12

class TabBar extends React.Component {
    state = {
        tabWidth: null
    }

    // we wait a frame before showing the tab bar to calculate the layout
    _onLayout({ nativeEvent: { layout } }) {
        // the number of tabs to show
        const n = this.props.numTabs
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
                    <this._Tab index={index}>{key}</this._Tab>
                )}
                {...unused}
            />
        )
    }

    get _fixedBar() {
        return (
            <View style={styles.container}>
                {this.props.children.map(({ key }, i) => (
                    <this._Tab index={i} key={key}>
                        {key}
                    </this._Tab>
                ))}
            </View>
        )
    }

    _Tab = ({ index, children }) => {
        const { selected, selectTab } = this.props

        return (
            <Button
                style={[{ width: this.state.tabWidth }, styles.tab]}
                onPress={() => selectTab(children)}
                disabled={index === selected}
            >
                <Text
                    style={[
                        styles.tabText,
                        index === selected && styles.selectedTab
                    ]}
                >
                    {children}
                </Text>
            </Button>
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

    constructor(...args) {
        super(...args)
        this._onLayout = this._onLayout.bind(this)
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
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedTab: {
        color: primaryColor
    }
})

export default TabBar
