// @flow
// external imports
import React from 'react'
import { Svg, Path, Rect } from 'svgs'
// internal imports
import type { IconProps } from './types'

const CreditCard = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-credit-card"
        {...props.style}
    >
        <Rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
        <Path d="M1 10h22" />
    </Svg>
)

export default CreditCard
