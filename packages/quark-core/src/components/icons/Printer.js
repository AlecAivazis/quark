// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Printer = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-printer"
        {...props}
    >
        <Path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <Path d="M6 14h12v8H6z" />
    </Svg>
)

export default Printer
