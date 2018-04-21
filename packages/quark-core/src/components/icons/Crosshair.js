// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from './types'

const Crosshair = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-crosshair"
        {...props.style}
    >
        <Circle cx={12} cy={12} r={10} />
        <Path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
    </Svg>
)

export default Crosshair
