// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const CornerDownLeft = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-corner-down-left"
        {...props}
    >
        <Path d="M9 10l-5 5 5 5" />
        <Path d="M20 4v7a4 4 0 0 1-4 4H4" />
    </Svg>
)

export default CornerDownLeft
