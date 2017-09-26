// external imports
import React from 'react'
import { ScrollView, View, StyleSheet, Text, FlatList } from 'react-native'
// local imports
import { Button } from '../../components'
import { baseDim, grey5, primaryColor } from '../../styles'

// the margin between tabs
const tabMargin = 12


class TabBar extends React.Component {
    state = {
        tabWidth: null,
    }

    // we wait a frame before showing the tab bar to calculate the layout
    _onLayout({nativeEvent: {layout}}) {
        // the number of tabs to show
        const n = this.props.numTabs
        // the total width of the bar
        const w = layout.width

        // make sure the tabs are wide enough to fit the specified amount
        this.setState({
            tabWidth: Math.round((w - n * tabMargin)/ n)
        })
    }

    render() {
        const {style, children, numTabs, selectTab, selected, ...unused} = this.props

        return (
            <View style={[styles.container, style]} onLayout={this._onLayout}>
                {this.state.tabWidth && <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={children}
                    extraData={selected}
                    renderItem={({item: { key }, index}) => (
                        <Button
                            style={[{ width: this.state.tabWidth }, styles.tab]}
                            onPress={() => selectTab(key)}
                            disabled={index === selected}
                        >
                            <Text style={[styles.tabText, index === selected && styles.selectedTab]}>
                                {key}
                            </Text>
                        </Button>
                    )}
                    {...unused}
                />}
            </View>
        )
    }

    constructor(...args) {
        super(...args)
        this._onLayout = this._onLayout.bind(this)
    }
}

TabBar.defaultProps = {
    numTabs: 5,
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    tab: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedTab: {
        color: primaryColor,
    }
})

export default TabBar
