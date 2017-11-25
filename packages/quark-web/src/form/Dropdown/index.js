// @flow
// external imports
import * as React from 'react'
import ReactDOM from 'react-dom'
import { View } from 'react-native-web'
// local imports
import { WithPortal, ClickAway, Card, Measure } from 'quark-web'
import type { MeasurePayload } from 'quark-web'
import styles from './styles'

type Props = {
    active: boolean,
    closeDropdown: (?Event) => void,
    children: number => React.Node,
    toggle: React.Node,
    style?: {}
}

type State = {
    active: boolean
}

// needs to be a class to hold references
class Dropdown extends React.Component<Props, State> {
    _toggle: ?HTMLDivElement

    state = {
        active: false
    }

    _toggleDropdown = () =>
        this.setState({
            active: !this.state.active
        })

    _content = (dimensions: { width: number, height: number, top: number, left: number }) => (
        <ClickAway
            active={this.state.active}
            onClick={this._toggleDropdown}
            filter={(evt: any) => (this._toggle ? !this._toggle.contains(evt.target) : false)}
        >
            <Card
                style={{
                    ...styles.dropdown,
                    position: 'absolute',
                    ...dimensions,
                    top: dimensions.top + dimensions.height,
                    height: 100
                }}
            >
                {this.props.children(-1)}
            </Card>
        </ClickAway>
    )

    render() {
        return (
            <WithPortal id="dropdown">
                {element => (
                    <Measure>
                        {({ measureRef, ...dimensions }) => (
                            <View style={{ ...styles.anchor, ...this.props.style }}>
                                <div
                                    onClick={this._toggleDropdown}
                                    ref={ele => {
                                        this._toggle = ele
                                        // this._toggle.onscroll = () => console.log('scrolling')
                                        // console.log(ele)
                                        measureRef(ele)
                                    }}
                                    style={styles.toggle}
                                >
                                    {this.props.toggle}
                                </div>
                                {this.state.active &&
                                    element &&
                                    ReactDOM.createPortal(this._content(dimensions), element)}
                            </View>
                        )}
                    </Measure>
                )}
            </WithPortal>
        )
    }
}

export default Dropdown
