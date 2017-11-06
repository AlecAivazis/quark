// external imports
import React from 'react'
import { Text } from 'react-native'
// local imports
import CardGrid from './'
import { Card } from 'quark-core/components/card'

import renderer from 'react-test-renderer'

// the subject of our test
const Subject = ({ ...unused }) => (
    <CardGrid {...unused}>
        <Card>
            <Text>hello</Text>
        </Card>
        <Card>
            <Text>hello</Text>
        </Card>
        <Card>
            <Text>hello</Text>
        </Card>
        <Card>
            <Text>hello</Text>
        </Card>
        <Card>
            <Text>hello</Text>
        </Card>
    </CardGrid>
)

it('defaults to 3 columns', () => {
    const rendered = renderer.create(<Subject />).toJSON()
    expect(rendered).toMatchSnapshot()
})

it('supports specifying number of columns', () => {
    const rendered = renderer.create(<Subject nCols={2} />).toJson()
    expect(rendered).toMatchSnapshot()
})
