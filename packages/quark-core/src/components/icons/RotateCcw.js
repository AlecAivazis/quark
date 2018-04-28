// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from './types'

const RotateCcw = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-rotate-ccw"
        {...props.style}
    >
        <Path d="M1 4v6h6" />
        <Path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </Svg>
)

export default RotateCcw
