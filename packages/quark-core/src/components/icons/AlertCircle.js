// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'

const AlertCircle = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-alert-circle"
        {...props}
    >
        <Circle cx={12} cy={12} r={10} />
        <Path d="M12 8v4M12 16" />
    </Svg>
)

export default AlertCircle
