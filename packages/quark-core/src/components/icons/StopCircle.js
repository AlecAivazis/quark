// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const StopCircle = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-stop-circle"
        {...props.style}
    >
        <Circle cx={12} cy={12} r={10} />
        <Path d="M9 9h6v6H9z" />
    </Svg>
)

export default StopCircle
