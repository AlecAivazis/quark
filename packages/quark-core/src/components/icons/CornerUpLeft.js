// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const CornerUpLeft = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-corner-up-left"
        {...props}
    >
        <Path d="M9 14L4 9l5-5" />
        <Path d="M20 20v-7a4 4 0 0 0-4-4H4" />
    </Svg>
)

export default CornerUpLeft
