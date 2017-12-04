// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const AlignCenter = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-align-center"
        {...props.style}
    >
        <Path d="M18 10H6M21 6H3M21 14H3M18 18H6" />
    </Svg>
)

export default AlignCenter
