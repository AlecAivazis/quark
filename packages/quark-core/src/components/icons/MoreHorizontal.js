// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const MoreHorizontal = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-more-horizontal"
        {...props}
    >
        <Circle cx={12} cy={12} r={2} />
        <Circle cx={20} cy={12} r={2} />
        <Circle cx={4} cy={12} r={2} />
    </Svg>
)

export default MoreHorizontal
