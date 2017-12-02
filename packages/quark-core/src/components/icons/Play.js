// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Play = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-play"
        {...props}
    >
        <Path d="M5 3l14 9-14 9V3z" />
    </Svg>
)

export default Play
