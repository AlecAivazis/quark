// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from './types'

const Shield = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-shield"
        {...props.style}
    >
        <Path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z" />
    </Svg>
)

export default Shield
