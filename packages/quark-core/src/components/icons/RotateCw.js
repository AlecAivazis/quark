// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from './types'

const RotateCw = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-rotate-cw"
        {...props.style}
    >
        <Path d="M23 4v6h-6" />
        <Path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </Svg>
)

export default RotateCw
