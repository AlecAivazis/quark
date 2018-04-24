// @flow
// external imports
import React from 'react'
import { Svg, Path, Rect } from 'svgs'
// internal imports
import type { IconProps } from './types'

const Unlock = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-unlock"
        {...props.style}
    >
        <Rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
        <Path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </Svg>
)

export default Unlock
