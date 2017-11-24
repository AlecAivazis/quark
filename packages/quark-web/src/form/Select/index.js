// @flow
// external imports
import * as React from 'react'
// local imports
import { Dropdown } from '..'
import styles from './styles'
import type { OptionValue } from '../Option'

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

  render() {
    return (
      <div style={styles.container}>
        {/* the Dropdown ClickAway will handle the close, toggle should only happen */}
        <Dropdown active={this.state.active} closeDropdown={this._toggle} toggle="toggle">
          {() => <div>hello</div>}
        </Dropdown>
      </div>
    )
  }
}

export default Select
