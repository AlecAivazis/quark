// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const CornerDownRight = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-corner-down-right"
        {...props}
    >
        <Path d="M15 10l5 5-5 5" />
        <Path d="M4 4v7a4 4 0 0 0 4 4h12" />
    </Svg>
)

export default CornerDownRight
