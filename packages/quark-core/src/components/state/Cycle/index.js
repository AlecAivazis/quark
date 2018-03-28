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
    interval: number,
    active: boolean
}

type State = {
    index: number,
    incrementCount: number
}

class Cycle extends React.Component<Props, State> {
    static defaultProps = {
        active: true
    }

    state = {
        index: 0,
        incrementCount: 0
    }

    render = () => (
        <React.Fragment>
            {this.props.active && (
                <Interval interval={this.props.interval} key={this.state.incrementCount}>
                    {this._next(false)}
                </Interval>
            )}
            {this.props.children({
                item: this.props.items[this.state.index],
                index: this.state.index,
                next: this._next(true),
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

    _next = (increment: boolean) => (): void =>
        this.setState(({ index, incrementCount }) => ({
            index: index === this.props.items.length - 1 ? 0 : index + 1,
            incrementCount: incrementCount + 1
        }))

    _prev = (): void =>
        this.setState(({ index, incrementCount }) => ({
            index: index === 0 ? this.props.items.length - 1 : index - 1,
            incrementCount: incrementCount + 1
        }))

    _goTo = (index: number): void =>
        this.setState(({ incrementCount }) => ({
            index,
            incrementCount: incrementCount + 1
        }))
}

export default Cycle
