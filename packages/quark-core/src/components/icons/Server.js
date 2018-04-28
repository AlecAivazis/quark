// @flow
// external imports
import React from 'react'
import { Svg, Path, Rect } from 'svgs'
// internal imports
import type { IconProps } from './types'

const Server = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-server"
        {...props.style}
    >
        <Rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
        <Rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
        <Path d="M6 18" />
    </Svg>
)

export default Server
