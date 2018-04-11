// @flow
// external imports
import * as React from 'react'
import PropTypes from 'prop-types'
// local imports
import { EventListener } from '..'

type Props = {
    active: boolean,
    onClick: Event => void,
    children: React.Node,
    event?: string,
    filter?: Event => boolean
}

class ClickAway extends React.Component<Props> {
    _container: ?HTMLSpanElement

    static defaultProps = {
        active: true,
        onClick: () => {}
    }

    _callback = (evt: Event): void => this.props.onClick(evt)

    render() {
        // grab used props
        const { active, children, event, onClick, filter, ...unused } = this.props

        const eventFilter = filter || ((evt: Event) => true)
        // render the component
        return (
            <span
                style={{ display: 'inline-block' }}
                ref={ele => (this._container = ele)}
                {...unused}
            >
                {children}
                {active && (
                    <EventListener event={event || 'mousedown'}>
                        {(evt: any) =>
                            this._container &&
                            !this._container.contains(evt.target) &&
                            eventFilter(evt) &&
                            this._callback(evt)
                        }
                    </EventListener>
                )}
            </span>
        )
    }
}

export default ClickAway
