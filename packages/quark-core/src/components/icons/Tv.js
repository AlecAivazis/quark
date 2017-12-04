// @flow
// external imports
import React from 'react'
import { Svg, Path, Rect } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Tv = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-tv"
        {...props.style}
    >
        <Rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
        <Path d="M17 2l-5 5-5-5" />
    </Svg>
)

export default Tv
