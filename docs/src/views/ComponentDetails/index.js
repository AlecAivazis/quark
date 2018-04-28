// external imports
import React from 'react'
import { H3, FlexColumn, FlexRow, Text, Markdown, Link } from 'quark-web'
// local imports
import data from 'data.json'
import styles from './styles'
import PropTable from './PropTable'
import Examples from './Examples'
import { Title } from 'src/components'

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

    // the package this component belongs to
    // const pkg = info.tags[0] || 'quark-core'
    const path = info.filepath.split('quark/packages/')[1]
    const link = `https://github.com/AlecAivazis/quark/blob/master/packages/${path}/index.js`

    return (
        <FlexColumn>
            <FlexRow alignItems="center" justifyContent="space-between">
                <Title style={{ marginBottom: 0 }}>{info.name}</Title>
                <a href={link} target="_blank">
                    <Link style={{ fontWeight: '400' }}>View source on GitHub</Link>
                </a>
            </FlexRow>
            <Markdown textStyle={styles.description}>{info.description}</Markdown>
            <PropTable info={info} style={styles.section} />
            <Examples info={info} style={styles.section} />
        </FlexColumn>
    )
}

export default ComponentDetails
