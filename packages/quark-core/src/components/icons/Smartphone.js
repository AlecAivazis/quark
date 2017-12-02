// @flow
// external imports
import React from 'react'
import { Svg, Path, Rect } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Smartphone = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-smartphone"
        {...props}
    >
        <Rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
        <Path d="M12 18" />
    </Svg>
)

export default Smartphone
