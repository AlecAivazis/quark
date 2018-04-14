import React from 'react'

const Quark = props => (
    <svg width={105} height={30} viewBox="0 0 105 30" {...props}>
        <defs>
            <linearGradient x1="12.232%" y1="0%" x2="94.968%" y2="0%" id="a">
                <stop stopColor="#F81" offset="0%" />
                <stop stopColor="#DE00FF" offset="100%" />
            </linearGradient>
        </defs>
        <text
            transform="translate(-41 -27)"
            fill="url(#a)"
            fillRule="evenodd"
            fontFamily="HelveticaNeue-Bold, Helvetica Neue"
            fontSize={36}
            fontWeight="bold"
            letterSpacing={0.288}
        >
            <tspan x={40} y={54}>
                Quark
            </tspan>
        </text>
    </svg>
)

export default Quark
