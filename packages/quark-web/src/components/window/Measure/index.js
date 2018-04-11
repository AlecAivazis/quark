// @flow
// external imports
import * as React from 'react'

type Props = {
    children: MeasurePayload => React.Node
}

type State = {
    node: ?HTMLElement,
    lastDimensions: ?BoundingBox,
    dimensions: BoundingBox,
    running: boolean
}

type BoundingBox = {
    height: number,
    width: number,
    left: number,
    top: number
}

export type MeasurePayload = BoundingBox & {
    measureRef: any => void
}

class Measure extends React.Component<Props, State> {
    // track if the instance is mounted
    _mounted: boolean

    state = {
        node: null,
        running: false,
        lastDimensions: null,
        dimensions: {
            height: -1,
            width: -1,
            left: -1,
            top: -1
        }
    }

    _updateDimensions = () => {
        // guards
        if (!this.state.node || !this._mounted) {
            return
        }

        // grab the location of the node
        const current = this.state.node.getBoundingClientRect()
        // and the last we knew about it
        const last = this.state.lastDimensions

        if (!last) {
            return
        }
        // if the scroll height has changed
        if (
            this.state.dimensions.top === -1 ||
            current.top !== last.top ||
            current.left !== last.left ||
            current.width !== last.width ||
            current.height !== last.height
        ) {
            // update the component state
            this.setState({
                lastDimensions: current,
                dimensions: {
                    height: current.height,
                    width: current.width,
                    top: current.top,
                    left: current.left
                }
            })
        }
        // we're done here so keep updating
        requestAnimationFrame(this._updateDimensions)
    }

    _ref = (node: HTMLElement) => {
        // if we are attaching the node for the first time
        if (!this.state.node) {
            // save the node in state
            this.setState(
                { node, running: true, lastDimensions: node.getBoundingClientRect() },
                // start updating the position of the element when we've saved the current value
                this._updateDimensions
            )
        }
    }

    // gross hack to terminate the animation frame when this unmounts
    componentDidMount() {
        this._mounted = true
    }
    componentWillUnmount() {
        this._mounted = false
    }

    render = () => {
        return this.props.children({
            measureRef: this._ref,
            ...this.state.dimensions
        })
    }
}

export default Measure
