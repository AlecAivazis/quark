// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Check = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-check"
        {...props}
    >
        <Path d="M20 6L9 17l-5-5" />
    </Svg>
)

export default Check
