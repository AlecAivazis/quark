// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const HelpCircle = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-help-circle"
        {...props.style}
    >
        <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <Circle cx={12} cy={12} r={10} />
        <Path d="M12 17" />
    </Svg>
)

export default HelpCircle
