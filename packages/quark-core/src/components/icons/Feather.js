// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Feather = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-feather"
        {...props}
    >
        <Path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17 15H9" />
    </Svg>
)

export default Feather
