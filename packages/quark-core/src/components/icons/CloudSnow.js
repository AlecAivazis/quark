// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const CloudSnow = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-cloud-snow"
        {...props}
    >
        <Path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25M16 20" />
    </Svg>
)

export default CloudSnow
