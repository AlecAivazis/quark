// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Italic = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-italic"
        {...props}
    >
        <Path d="M19 4h-9M14 20H5M15 4L9 20" />
    </Svg>
)

export default Italic
