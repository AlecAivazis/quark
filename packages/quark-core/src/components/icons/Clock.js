// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Clock = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-clock"
        {...props}
    >
        <Circle cx={12} cy={12} r={10} />
        <Path d="M12 6v6l3 3" />
    </Svg>
)

export default Clock
