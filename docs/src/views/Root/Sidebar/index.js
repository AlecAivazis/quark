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
            <PageLink title="Basics" top={true}>
                <ComponentLink exact to="/">
                    Introduction
                </ComponentLink>
                <ComponentLink exact to="/getting-started">
                    Getting Started
                </ComponentLink>
            </PageLink>
            <PageLink title="Design">
                <ComponentLink to="/design/palette">Color Palette</ComponentLink>
                <ComponentLink to="/design/typography">Typography</ComponentLink>
                <ComponentLink to="/design/customize">Custom Theme</ComponentLink>
            </PageLink>
            <PageLink title="Components">
                {data.map(({ name: sectionName, components }) => (
                    <ComponentSection title={sectionName} key={sectionName}>
                        {components.map(component => (
                            <ComponentLink
                                to={`/components/${sectionName}/${component.name}`}
                                key={component.name}
                                component={component}
                            />
                        ))}
                    </ComponentSection>
                ))}
            </PageLink>
        </FlexColumn>
    </FlexColumn>
)

export default Sidebar
