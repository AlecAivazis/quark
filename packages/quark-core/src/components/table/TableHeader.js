// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { grey3 } from '~/styles'
import {styles as rowStyles} from './TableRow'

const TableHeader = ({style, ...unused}) => (
    <View style={[rowStyles.container, styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: grey3,
    }
})

export default TableHeader
