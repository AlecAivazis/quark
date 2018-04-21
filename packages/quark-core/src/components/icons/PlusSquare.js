// @flow
// external imports
import React from 'react'
import { Svg, Path, Rect } from 'svgs'
// internal imports
import type { IconProps } from './types'

const PlusSquare = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-plus-square"
        {...props.style}
    >
        <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
        <Path d="M12 8v8M8 12h8" />
    </Svg>
)

export default PlusSquare
