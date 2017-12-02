// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const ArrowUp = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up"
        {...props}
    >
        <Path d="M12 20V4M6 10l6-6 6 6" />
    </Svg>
)

export default ArrowUp
