// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Navigation = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-navigation"
        {...props}
    >
        <Path d="M3 11l19-9-9 19-2-8-8-2z" />
    </Svg>
)

export default Navigation
