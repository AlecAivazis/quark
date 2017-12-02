// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const CornerRightDown = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-corner-right-down"
        {...props}
    >
        <Path d="M10 15l5 5 5-5" />
        <Path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </Svg>
)

export default CornerRightDown
