// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from './types'

const Minimize2 = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-minimize-2"
        {...props.style}
    >
        <Path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
    </Svg>
)

export default Minimize2
