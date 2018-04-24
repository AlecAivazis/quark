// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from './types'

const CheckCircle = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-check-circle"
        {...props.style}
    >
        <Path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
        <Path d="M23 3L12 14l-3-3" />
    </Svg>
)

export default CheckCircle
