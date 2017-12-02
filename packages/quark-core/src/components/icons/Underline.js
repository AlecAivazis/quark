// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Underline = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-underline"
        {...props}
    >
        <Path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3M4 21h16" />
    </Svg>
)

export default Underline
