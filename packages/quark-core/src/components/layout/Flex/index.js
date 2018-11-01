// @flow
// external imports
import * as React from 'react'
import { View } from 'react-native'
import type { ViewPropTypes } from 'react-native'

export type FlexViewPropTypes = {
    direction?: 'row' | 'column',
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly',
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
    order?: number,
    shrink?: number,
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
} & ViewPropTypes

const Flex = ({
    direction,
    wrap,
    justifyContent,
    alignItems,
    grow,
    shrink,
    alignSelf,
    style,
    ...unused
}: FlexViewPropTypes) => (
    <View
        style={[
            {
                display: 'flex',
                flexDirection: direction,
                flexWrap: wrap,
                justifyContent,
                alignItems,
                flexGrow: grow,
                flexShrink: shrink,
                alignSelf
            },
            style
        ]}
        {...unused}
    />
)

export default Flex
