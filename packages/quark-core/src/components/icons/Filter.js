// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Filter = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-filter"
        {...props}
    >
        <Path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </Svg>
)

export default Filter
