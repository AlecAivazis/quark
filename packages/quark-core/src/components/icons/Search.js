// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'

const Search = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search"
        {...props}
    >
        <Circle cx={10.5} cy={10.5} r={7.5} />
        <Path d="M21 21l-5.2-5.2" />
    </Svg>
)

export default Search
