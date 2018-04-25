// external imports
import React from 'react'
import { H1, H3, FlexColumn, Text, Markdown } from 'quark-web'
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
        // if something went wrong
    } catch (err) {
        // render the error state
        return (
            <FlexColumn>
                <Text>Could not find component designated by the url</Text>
            </FlexColumn>
        )
    }

    return (
        <FlexColumn>
            <H1 style={styles.title}>{info.name}</H1>
            <Markdown textStyle={styles.description}>{info.description}</Markdown>
            <PropTable info={info} style={styles.section} />
            <Examples info={info} style={styles.section} />
        </FlexColumn>
    )
}

export default ComponentDetails
