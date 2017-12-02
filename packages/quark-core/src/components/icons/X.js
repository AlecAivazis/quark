// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const X = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-x"
        {...props}
    >
        <Path d="M18 6L6 18M6 6l12 12" />
    </Svg>
)

export default X
