// @flow
// external imports
import * as React from 'react'
import ReactDOM from 'react-dom'
import { View } from 'react-native-web'
// local imports
import { WithPortal, ClickAway, Card, Measure, EventListener } from 'quark-web'
import type { MeasurePayload } from 'quark-web'
import styles from './styles'

type Props = {
    children: DropdownPayload => React.Node,
    toggle: React.Node,
    style?: {},
    dropdownStyle?: {},
    min?: number,
    max?: number
}

type DropdownPayload = {
    index: number,
    setIndex: number => void,
    toggle: () => void
}

type State = {
    active: boolean,
    index: number
}

// needs to be a class to hold references
class Dropdown extends React.Component<Props, State> {
    _toggle: ?HTMLDivElement

    state = {
        active: false,
        index: -1
    }

    _toggleDropdown = () =>
        this.setState({
            active: !this.state.active,
            index: -1
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
                    left: dimensions.left,
                    width: dimensions.width,
                    top: dimensions.top + dimensions.height,
                    ...this.props.dropdownStyle
                }}
            >
                {this.props.children({
                    index: this.state.index,
                    setIndex: index => this.setState({ index }),
                    toggle: this._toggleDropdown
                })}
            </Card>
        </ClickAway>
    )

    _keyDown = (event: Event) => {
        // if the user pressed ↑
        if (event.which === 38) {
            event.preventDefault()
            // increment the counter
            this.setState({
                // make sure we're always over the minimum
                index: Math.max(this.state.index - 1, this.props.min || 0)
            })
            // otherwise if the user pressed ↓
        } else if (event.which === 40) {
            event.preventDefault()
            // decrement the counter
            this.setState({
                // make sure we're always under the maximum value
                index: Math.min(this.state.index + 1, (this.props.max || Infinity) - 1)
            })
        }
    }

    render() {
        return [
            <WithPortal id="dropdown" key="portal">
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
            </WithPortal>,
            this.state.active && (
                <EventListener event="keydown" key="events">
                    {this._keyDown}
                </EventListener>
            )
        ]
    }
}

export default Dropdown
