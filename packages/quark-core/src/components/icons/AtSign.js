// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from './types'

const AtSign = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-at-sign"
        {...props.style}
    >
        <Circle cx={12} cy={12} r={4} />
        <Path d="M16 12v1a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
    </Svg>
)

export default AtSign
