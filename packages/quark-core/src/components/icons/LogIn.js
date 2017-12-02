// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const LogIn = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-log-in"
        {...props}
    >
        <Path d="M14 22h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5" />
        <Path d="M11 16l4-4-4-4M15 12H3" />
    </Svg>
)

export default LogIn
