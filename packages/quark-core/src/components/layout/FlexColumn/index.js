// @flow
// external imports
import React from 'react'
//local imports
import { Flex } from '../Flex'
import type { FlexViewPropTypes } from '../Flex'

const FlexColumn = ({ ...unused }: FlexViewPropTypes) => <Flex direction="column" {...unused} />

export default FlexColumn
