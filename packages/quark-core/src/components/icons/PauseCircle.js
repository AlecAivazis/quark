// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const PauseCircle = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-pause-circle"
        {...props}
    >
        <Circle cx={12} cy={12} r={10} />
        <Path d="M10 15V9M14 15V9" />
    </Svg>
)

export default PauseCircle
