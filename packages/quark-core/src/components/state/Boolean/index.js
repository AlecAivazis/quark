// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import FreeState from '../Free'

const BooleanState = ({ children, ...unused }) => (
    <FreeState {...unused}>
        {({ state, set }) =>
            React.Children.only(
                children({
                    state,
                    set: val => set(Boolean(val)),
                    toggle: () => set(!state)
                })
            )}
    </FreeState>
)

BooleanState.propTypes = {
    children: PropTypes.func.isRequired
}

export default BooleanState
