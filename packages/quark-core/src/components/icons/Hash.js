// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from './types'

const Hash = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-hash"
        {...props.style}
    >
        <Path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" />
    </Svg>
)

export default Hash
