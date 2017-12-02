// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const AlignRight = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-align-right"
        {...props}
    >
        <Path d="M21 10H7M21 6H3M21 14H3M21 18H7" />
    </Svg>
)

export default AlignRight
