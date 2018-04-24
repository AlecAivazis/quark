// @flow
// external imports
import React from 'react'
import { Svg, Path, Circle } from 'svgs'
// internal imports
import type { IconProps } from './types'

const Voicemail = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-voicemail"
        {...props.style}
    >
        <Circle cx={5.5} cy={11.5} r={4.5} />
        <Circle cx={18.5} cy={11.5} r={4.5} />
        <Path d="M5.5 16h13" />
    </Svg>
)

export default Voicemail
