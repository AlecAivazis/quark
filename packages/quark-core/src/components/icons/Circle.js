// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle as SVGCircle } from 'svgs'

const Circle = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-circle"
        {...props}
    >
        <SVGCircle cx={12} cy={12} r={10} />
    </Svg>
)

export default Circle
