// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const PlusCircle = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-plus-circle"
        {...props.style}
    >
        <Circle cx={12} cy={12} r={10} />
        <Path d="M12 8v8M8 12h8" />
    </Svg>
)

export default PlusCircle
