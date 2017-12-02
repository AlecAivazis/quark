// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Upload = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-upload"
        {...props}
    >
        <Path d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M16 6l-4-4-4 4M12 2v14" />
    </Svg>
)

export default Upload
