// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from './types'

const ChevronsLeft = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevrons-left"
        {...props.style}
    >
        <Path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
    </Svg>
)

export default ChevronsLeft
