// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const VolumeX = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-volume-x"
        {...props.style}
    >
        <Path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
    </Svg>
)

export default VolumeX
