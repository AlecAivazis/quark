// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const ChevronsRight = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevrons-right"
        {...props}
    >
        <Path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
    </Svg>
)

export default ChevronsRight
