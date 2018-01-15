// @flow
// external imports
import * as React from 'react'

type Props = {
    delay: number,
    children: () => void
}

class Timeout extends React.Component<Props> {
    _timeout = null

    componentDidMount() {
        this._timeout = setTimeout(this.props.children, this.props.delay)
    }

    componentWillUnmount() {
        clearTimeout(this._timeout)
    }

    // don't render anything
    render = () => null
}

export default Timeout
