// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from './types'

const List = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-list"
        {...props.style}
    >
        <Path d="M8 6h13M8 12h13M8 18h13M3 18" />
    </Svg>
)

export default List
