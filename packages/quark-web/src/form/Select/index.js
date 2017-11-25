// @flow
// external imports
import * as React from 'react'
// local imports
import { Dropdown } from '..'
import styles from './styles'
import type { OptionValue } from '../Option'
import { Text } from 'quark-web'

type Props = {
    value: OptionValue
}

type State = {
    active: boolean
}

// needs to be a class to hold references
class Select extends React.Component<Props, State> {
    state = {
        active: false
    }

    _toggle = () =>
        this.setState({
            active: !this.state.active
        })

    get _toggleElement() {
        return (
            <div style={styles.toggle}>
                <Text>toggle</Text>
            </div>
        )
    }

    render() {
        return (
            <Dropdown
                active={this.state.active}
                closeDropdown={this._toggle}
                toggle={this._toggleElement}
                style={{ width: 200 }}
            >
                {() => <div>hello</div>}
            </Dropdown>
        )
    }
}

export default Select
