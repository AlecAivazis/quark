// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'

const UserPlus = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-user-plus"
        {...props}
    >
        <Path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <Circle cx={8.5} cy={7} r={4} />
        <Path d="M20 8v6M23 11h-6" />
    </Svg>
)

export default UserPlus
