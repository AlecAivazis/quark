// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Percent = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-percent"
        {...props}
    >
        <Path d="M19 5L5 19" />
        <Circle cx={6.5} cy={6.5} r={2.5} />
        <Circle cx={17.5} cy={17.5} r={2.5} />
    </Svg>
)

export default Percent
