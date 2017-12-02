// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const FileText = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-file-text"
        {...props}
    >
        <Path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <Path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </Svg>
)

export default FileText
