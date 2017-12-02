// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const ChevronRight = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-right"
        {...props}
    >
        <Path d="M9 18l6-6-6-6" />
    </Svg>
)

export default ChevronRight
