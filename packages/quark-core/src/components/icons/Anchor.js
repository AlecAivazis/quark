// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Anchor = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-anchor"
        {...props.style}
    >
        <Circle cx={12} cy={5} r={3} />
        <Path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3" />
    </Svg>
)

export default Anchor
