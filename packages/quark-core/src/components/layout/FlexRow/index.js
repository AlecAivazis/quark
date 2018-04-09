// @flow
// external imports
import React from 'react'
//local imports
import { Flex } from './Flex'
import type { FlexViewPropTypes } from '../Flex'

const FlexRow = ({ ...unused }: FlexViewPropTypes) => <Flex direction="row" {...unused} />

export default FlexRow
