// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from './types'

const Chrome = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chrome"
        {...props.style}
    >
        <Circle cx={12} cy={12} r={10} />
        <Circle cx={12} cy={12} r={4} />
        <Path d="M21.17 8H12M3.95 6.06L8.54 14M10.88 21.94L15.46 14" />
    </Svg>
)

export default Chrome
