// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const Edit3 = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-edit-3"
        {...props}
    >
        <Path d="M14 2l4 4L7 17H3v-4L14 2zM3 22h18" />
    </Svg>
)

export default Edit3
