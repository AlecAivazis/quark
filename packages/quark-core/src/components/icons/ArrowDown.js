// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const ArrowDown = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-down"
        {...props}
    >
        <Path d="M12 4v16M18 14l-6 6-6-6" />
    </Svg>
)

export default ArrowDown
