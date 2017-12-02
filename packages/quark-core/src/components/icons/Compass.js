// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'

const Compass = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-compass"
        {...props}
    >
        <Circle cx={12} cy={12} r={10} />
        <Path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </Svg>
)

export default Compass
