// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const ArrowUpRight = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up-right"
        {...props}
    >
        <Path d="M6 18L18 6M9 6h9v9" />
    </Svg>
)

export default ArrowUpRight
