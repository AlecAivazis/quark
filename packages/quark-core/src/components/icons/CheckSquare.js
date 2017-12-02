// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const CheckSquare = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-check-square"
        {...props}
    >
        <Path d="M9 11l3 3L23 3" />
        <Path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </Svg>
)

export default CheckSquare
