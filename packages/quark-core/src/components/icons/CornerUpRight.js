// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const CornerUpRight = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-corner-up-right"
        {...props.style}
    >
        <Path d="M15 14l5-5-5-5" />
        <Path d="M4 20v-7a4 4 0 0 1 4-4h12" />
    </Svg>
)

export default CornerUpRight
