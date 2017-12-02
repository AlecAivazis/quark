// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Droplet = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-droplet"
        {...props}
    >
        <Path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </Svg>
)

export default Droplet
