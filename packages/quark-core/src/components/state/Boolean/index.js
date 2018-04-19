// @flow
// external imports
import * as React from 'react'
// local imports
import FreeState from '../Free'

type RenderPropCallback = {
    state: boolean,
    set: boolean => void,
    toggle: () => void
}

type Props = {
    initial?: boolean,
    children: RenderPropCallback => React.Node
}

const BooleanState = ({ children, ...unused }: Props) => (
    <FreeState {...unused}>
        {({ state, set }) =>
            React.Children.only(
                children({
                    state,
                    set: val => set(Boolean(val)),
                    toggle: () => set(!state)
                })
            )
        }
    </FreeState>
)

export default BooleanState
