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
        <PageLink to="/getting-started" title="Getting Started" />
        <PageLink to="/design" title="Design">
            <ComponentLink to="/design/pallete">Color Pallete</ComponentLink>
            <ComponentLink to="/design/typography">Typography</ComponentLink>
            <ComponentLink to="/design/customize">Customizing Your Theme</ComponentLink>
        </PageLink>
        <PageLink to="/components" title="Components">
            {data.map(({ section, components }) => (
                <ComponentSection title={section} key={section}>
                    {components.map(({ component }) => (
                        <ComponentLink to={`/components/${section}/${component}`} key={component}>
                            {component}
                        </ComponentLink>
                    ))}
                </ComponentSection>
            ))}
        </PageLink>
    </FlexColumn>
)

export default Sidebar
