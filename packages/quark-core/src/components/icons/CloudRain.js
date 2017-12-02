// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const CloudRain = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-cloud-rain"
        {...props}
    >
        <Path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
    </Svg>
)

export default CloudRain
