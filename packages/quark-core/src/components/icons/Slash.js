// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Slash = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-slash"
        {...props.style}
    >
        <Circle cx={12} cy={12} r={10} />
        <Path d="M4.93 4.93l14.14 14.14" />
    </Svg>
)

export default Slash
