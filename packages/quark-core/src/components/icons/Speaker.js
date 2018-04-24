// @flow
// external imports
import React from 'react'
import { Svg, Path, Rect, Circle } from 'svgs'
// internal imports
import type { IconProps } from './types'

const Speaker = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-speaker"
        {...props.style}
    >
        <Rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
        <Circle cx={12} cy={14} r={4} />
        <Path d="M12 6" />
    </Svg>
)

export default Speaker
