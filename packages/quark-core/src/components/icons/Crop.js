// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Crop = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-crop"
        {...props}
    >
        <Path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
        <Path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
    </Svg>
)

export default Crop
