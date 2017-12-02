// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const AlignLeft = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-align-left"
        {...props}
    >
        <Path d="M17 10H3M21 6H3M21 14H3M17 18H3" />
    </Svg>
)

export default AlignLeft
