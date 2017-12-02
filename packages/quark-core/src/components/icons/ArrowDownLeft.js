// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const ArrowDownLeft = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-down-left"
        {...props}
    >
        <Path d="M18 6L6 18M15 18H6V9" />
    </Svg>
)

export default ArrowDownLeft
