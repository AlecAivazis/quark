// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const BarChart = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-bar-chart"
        {...props}
    >
        <Path d="M18 3h4v18h-4zM10 8h4v13h-4zM2 13h4v8H2z" />
    </Svg>
)

export default BarChart
