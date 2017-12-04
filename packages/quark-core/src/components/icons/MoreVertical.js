// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const MoreVertical = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-more-vertical"
        {...props.style}
    >
        <Circle cx={12} cy={12} r={2} />
        <Circle cx={12} cy={4} r={2} />
        <Circle cx={12} cy={20} r={2} />
    </Svg>
)

export default MoreVertical
