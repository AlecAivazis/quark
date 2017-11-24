// @flow
// external imports
import * as React from 'react'
import ReactDOM from 'react-dom'
import Measure from 'react-measure'
// local imports
import { WithPortal, ClickAway } from 'quark-web'
import styles from './styles'

type Props = {
    active: boolean,
    closeDropdown: (?Event) => void,
    children: number => React.Node,
    toggle: React.Node
}

type State = {
    active: boolean,
    dimensions: {
        top: number,
        left: number,
        bottom: number,
        right: number,
        width: number,
        height: number
    }
}

// needs to be a class to hold references
class Dropdown extends React.Component<Props, State> {
    _toggle: ?HTMLDivElement

    state = {
        active: false,
        dimensions: {
            width: -1,
            height: -1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }
    }

    _toggleDropdown = () =>
        this.setState({
            active: !this.state.active
        })

    get _content() {
        return (
            <ClickAway
                active={this.state.active}
                onClick={this._toggleDropdown}
                filter={(evt: any) => (this._toggle ? !this._toggle.contains(evt.target) : false)}
            >
                <div
                    style={{
                        width: 100,
                        position: 'absolute',
                        ...this.state.dimensions,
                        top: this.state.dimensions.top + this.state.dimensions.height,
                        height: 100
                    }}
                >
                    {this.props.children(-1)}
                </div>
            </ClickAway>
        )
    }

    render() {
        return (
            <WithPortal id="dropdown">
                {element => (
                    <Measure
                        bounds
                        onResize={contentRect => {
                            this.setState({ dimensions: contentRect.bounds })
                        }}
                    >
                        {({ measureRef, contentRect }) => (
                            <div style={styles.anchor}>
                                <div
                                    onClick={this._toggleDropdown}
                                    ref={ele => {
                                        this._toggle = ele
                                        measureRef(ele)
                                    }}
                                    style={styles.toggle}
                                >
                                    {this.props.toggle}
                                </div>
                                {this.state.active &&
                                    element &&
                                    ReactDOM.createPortal(this._content, element)}
                            </div>
                        )}
                    </Measure>
                )}
            </WithPortal>
        )
    }
}

export default Dropdown
