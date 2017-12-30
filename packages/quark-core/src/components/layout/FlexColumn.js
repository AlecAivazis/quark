// @flow
// external imports
import React from 'react'
//local imports
import { Flex, FlexViewProps } from './Flex'

const FlexColumn = ({ ...unused }: FlexViewProps) => <Flex direction="column" {...unused} />

export default FlexColumn
