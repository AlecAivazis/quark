// @flow
// external imports
import React from 'react'
import { Svg, Path, Rect, Circle } from 'svgs'
// internal imports
import type { IconProps } from './types'

const ToggleLeft = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-toggle-left"
        {...props.style}
    >
        <Rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
        <Circle cx={8} cy={12} r={3} />
    </Svg>
)

export default ToggleLeft
