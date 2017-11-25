// @flow
// external imports
import * as React from 'react'

type Props = {
    children: MeasurePayload => React.Node
}

type State = {
    node: ?HTMLElement,
    dimensions: BoundingBox,
    lastTop: number,
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
    state = {
        node: null,
        running: false,
        lastTop: -1,
        dimensions: {
            height: -1,
            width: -1,
            left: -1,
            top: -1
        }
    }

    _updateDimensions = () => {
        // if we're supposed to stop running
        if (!this.state.running) {
            return
        }

        // grab the location of the node
        const current = this.state.node.getBoundingClientRect()
        // and the last we knew about it
        const last = this.state.lastDimensions

        // if the scroll height has changed
        if (
            this.state.dimensions.top === -1 ||
            current.top !== last.top ||
            current.left !== last.left
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

    componentWillUnMount() {
        this.setState({ running: false })
    }

    render = () => {
        return this.props.children({
            measureRef: this._ref,
            ...this.state.dimensions
        })
    }
}

export default Measure
