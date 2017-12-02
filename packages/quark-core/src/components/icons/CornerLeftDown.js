// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const CornerLeftDown = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-corner-left-down"
        {...props}
    >
        <Path d="M14 15l-5 5-5-5" />
        <Path d="M20 4h-7a4 4 0 0 0-4 4v12" />
    </Svg>
)

export default CornerLeftDown
