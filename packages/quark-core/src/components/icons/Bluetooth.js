// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Bluetooth = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-bluetooth"
        {...props}
    >
        <Path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" />
    </Svg>
)

export default Bluetooth
