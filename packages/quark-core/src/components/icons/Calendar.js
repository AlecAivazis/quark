// @flow
// external imports
import React from 'react'
import { Svg, Path, Rect } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Calendar = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-calendar"
        {...props.style}
    >
        <Rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <Path d="M16 2v4M8 2v4M3 10h18" />
    </Svg>
)

export default Calendar
