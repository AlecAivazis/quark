// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const CornerLeftUp = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-corner-left-up"
        {...props.style}
    >
        <Path d="M14 9L9 4 4 9" />
        <Path d="M20 20h-7a4 4 0 0 1-4-4V4" />
    </Svg>
)

export default CornerLeftUp
