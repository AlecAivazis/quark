// @flow
// external imports
import * as React from 'react'
// local imports
import { Interval } from '../../timing'

type CyclePayload = {
    item: any,
    index: number,
    next: () => void,
    previous: () => void,
    goTo: number => void
}

type Props = {
    items: any[],
    children: CyclePayload => void,
    interval: number
}

type State = {
    index: number,
    incrementCount: number
}

class Cycle extends React.Component<Props, State> {
    state = {
        index: 0,
        incrementCount: 0
    }

    render = () => (
        <React.Fragment>
            <Interval interval={this.props.interval} key={this.state.incrementCount}>
                {this._next}
            </Interval>
            {this.props.children({
                item: this.props.items[this.state.index],
                index: this.state.index,
                next: this._next,
                previous: this._prev,
                goTo: this._goTo
            })}
        </React.Fragment>
    )

    componentWillReceiveProps = ({ items: items1 }: Props) => {
        // grab the current list of items
        const { items: items2 } = this.props
        // check if the items are the same
        if (JSON.stringify(items1) !== JSON.stringify(items2)) {
            // reset the cycle to the first element
            this._goTo(0)
            // bump the increment count to reset the interval
            this.setState(({ incrementCount }) => ({ incrementCount: incrementCount + 1 }))
        }
    }

    _next = (): void =>
        this.setState(({ index }) => ({
            index: index === this.props.items.length - 1 ? 0 : index + 1
        }))

    _prev = (): void =>
        this.setState(({ index }) => ({
            index: index === 0 ? this.props.items.length - 1 : index - 1
        }))

    _goTo = (index: number): void =>
        this.setState(() => ({
            index
        }))
}

export default Cycle
