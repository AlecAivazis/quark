// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Scissors = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-scissors"
        {...props.style}
    >
        <Circle cx={6} cy={6} r={3} />
        <Circle cx={6} cy={18} r={3} />
        <Path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    </Svg>
)

export default Scissors
