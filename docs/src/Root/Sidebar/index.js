// external imports
import React from 'react'
import { FlexColumn, Text } from 'quark-web'
// local imports
import styles from './styles'
import PageLink from './PageLink'
import ComponentLink from './ComponentLink'
import ComponentSection from './ComponentSection'
import Header from './Header'
import data from 'data.json'

const Sidebar = ({ style }) => (
    <FlexColumn style={{ ...styles.container, ...style }}>
        <Header />
        <FlexColumn style={styles.content}>
            <PageLink to="/getting-started" title="Getting Started" />
            <PageLink to="/design" title="Design" style={styles.notSectioned}>
                <ComponentLink to="/design/pallete">Color Pallete</ComponentLink>
                <ComponentLink to="/design/typography">Typography</ComponentLink>
                <ComponentLink to="/design/customize">Custom Theme</ComponentLink>
            </PageLink>
            <PageLink to="/components" title="Components">
                {data.map(({ section, components }) => (
                    <ComponentSection title={section} key={section}>
                        {components.map(({ component }) => (
                            <ComponentLink
                                to={`/components/${section}/${component}`}
                                key={component}
                            >
                                {component}
                            </ComponentLink>
                        ))}
                    </ComponentSection>
                ))}
            </PageLink>
        </FlexColumn>
    </FlexColumn>
)

export default Sidebar
