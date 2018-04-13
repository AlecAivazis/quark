// external imports
import React from 'react'
import { FlexColumn, Text } from 'quark-web'
// local imports
import styles from './styles'
import PageLink from './PageLink'
import ComponentLink from './ComponentLink'
import ComponentSection from './ComponentSection'
import data from 'data.json'

const Sidebar = () => (
    <FlexColumn style={styles.container}>
        <PageLink title="Getting Started" />
        <PageLink title="Design">
            <ComponentLink>Color Pallete</ComponentLink>
            <ComponentLink>Typography</ComponentLink>
            <ComponentLink>Customizing Your Theme</ComponentLink>
        </PageLink>
        <PageLink title="Components">
            {data.map(({ section, components }) => (
                <ComponentSection title={section}>
                    {components.map(({ component }) => <ComponentLink>{component}</ComponentLink>)}
                </ComponentSection>
            ))}
        </PageLink>
    </FlexColumn>
)

export default Sidebar
