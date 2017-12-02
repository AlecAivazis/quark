// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Plus = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-plus"
        {...props}
    >
        <Path d="M12 5v14M5 12h14" />
    </Svg>
)

export default Plus
