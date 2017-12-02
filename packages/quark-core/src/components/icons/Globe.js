// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Globe = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-globe"
        {...props}
    >
        <Circle cx={12} cy={12} r={10} />
        <Path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </Svg>
)

export default Globe
