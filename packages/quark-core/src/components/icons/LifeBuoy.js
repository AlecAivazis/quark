// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'

const LifeBuoy = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-life-buoy"
        {...props}
    >
        <Circle cx={12} cy={12} r={10} />
        <Circle cx={12} cy={12} r={4} />
        <Path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M14.83 9.17l3.53-3.53M4.93 19.07l4.24-4.24" />
    </Svg>
)

export default LifeBuoy
