// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Pause = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-pause"
        {...props}
    >
        <Path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </Svg>
)

export default Pause
