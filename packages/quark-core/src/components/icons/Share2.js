// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Share2 = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-share-2"
        {...props.style}
    >
        <Circle cx={18} cy={5} r={3} />
        <Circle cx={6} cy={12} r={3} />
        <Circle cx={18} cy={19} r={3} />
        <Path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </Svg>
)

export default Share2
