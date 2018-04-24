// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from './types'

const AlignJustify = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-align-justify"
        {...props.style}
    >
        <Path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
    </Svg>
)

export default AlignJustify
