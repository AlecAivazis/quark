// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const ZoomOut = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-zoom-out"
        {...props.style}
    >
        <Circle cx={11} cy={11} r={8} />
        <Path d="M21 21l-4.35-4.35M8 11h6" />
    </Svg>
)

export default ZoomOut
