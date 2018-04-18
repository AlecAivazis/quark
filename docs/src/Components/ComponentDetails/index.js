// external imports
import React from 'react'
import { H1, H3, FlexColumn, Text } from 'quark-web'
// local imports
import data from 'data.json'
import styles from './styles'
import PropTable from './PropTable'
import Examples from './Examples'

const ComponentDetails = ({ match }) => {
    // grab info out of the url
    const { section, component } = match.params

    try {
        // find the information designated by the url
        var info = data
            .find(({ name: sectionName }) => sectionName === section)
            .components.find(({ name: componentName }) => componentName === component)
    } catch (err) {}

    return info ? (
        <FlexColumn>
            <H1>{info.name}</H1>
            <Text>{info.description}</Text>
            <PropTable info={info} style={styles.section} />
            <Examples info={info} style={styles.section} />
        </FlexColumn>
    ) : (
        <FlexColumn>
            <Text>Could not find coponent designated by the url</Text>
        </FlexColumn>
    )
}

export default ComponentDetails
