// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const ChevronsDown = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevrons-down"
        {...props}
    >
        <Path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
    </Svg>
)

export default ChevronsDown
