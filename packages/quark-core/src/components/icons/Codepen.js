// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Codepen = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-codepen"
        {...props}
    >
        <Path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
        <Path d="M22 8.5l-10 7-10-7" />
        <Path d="M2 15.5l10-7 10 7M12 2v6.5" />
    </Svg>
)

export default Codepen
