// @flow
// external imports
import * as React from 'react'
import ReactDOM from 'react-dom'

type Props = {
    id: string,
    children: React.Node,
    style?: {}
}

type State = {
    element: ?HTMLElement
}

class WithPortal extends React.Component<Props, State> {
    state = {
        element: null
    }

    componentDidMount() {
        // look for an element with the designated id
        let element = document.getElementById(this._portalID)
        // the style to apply to the portal container
        let elementStyle = this.props.style || {}

        // if the element doesn't exist
        if (!element) {
            // create a new element
            element = document.createElement('div')
            // make sure there's only one
            element.id = this._portalID
            // append the element to the DOM
            document.getElementsByTagName('body')[0].appendChild(element)
        }

        // apply any styles
        Object.keys(elementStyle).forEach(
            style => element && element.style.setProperty(style, elementStyle[style])
        )

        // save the element in the component's state
        this.setState({ element })
    }

    componentWillUnmount() {
        if (this.state.element) {
            // remove the styling on the element
            this.state.element.setAttribute('style', '')
        }
    }

    get _portalID(): string {
        return this.props.id ? `portal-${this.props.id}` : 'portal'
    }

    render = () => {
        return this.state.element && ReactDOM.createPortal(this.props.children, this.state.element)
    }
}

export default WithPortal
