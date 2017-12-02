// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Package = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-package"
        {...props}
    >
        <Path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" />
        <Path d="M2.32 6.16L12 11l9.68-4.84M12 22.76V11M7 3.5l10 5" />
    </Svg>
)

export default Package
