// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const TrendingUp = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-trending-up"
        {...props}
    >
        <Path d="M23 6l-9.5 9.5-5-5L1 18" />
        <Path d="M17 6h6v6" />
    </Svg>
)

export default TrendingUp
