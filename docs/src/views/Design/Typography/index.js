// external imports
import React from 'react'
// local imports
import { FlexColumn, H2, H1, H3, Title, Subtitle, Text } from 'quark-web'
import { Title as PageTitle, Description } from 'src/components'
import styles from './styles'

const Typography = () => (
    <FlexColumn>
        <PageTitle>Typography</PageTitle>
        <Description>
            Quark comes with all of the semantic text components one would expect to find in a
            modern website. The font-stack used is designed to rely on system fonts wherever
            possible. For examples and more information on using the components, see the Typography
            section.
        </Description>
        <FlexColumn>
            <H1 style={styles.textExample}>Header Level 1</H1>
            <H2 style={styles.textExample}>Header Level 2</H2>
            <H3 style={styles.textExample}>Header Level 3</H3>
            <Title style={styles.textExample}>Title</Title>
            <Subtitle style={styles.textExample}>Subtitle</Subtitle>
            <Text style={styles.textExample}>Text</Text>
        </FlexColumn>
    </FlexColumn>
)

export default Typography
