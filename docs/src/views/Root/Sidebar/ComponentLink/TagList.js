// external imports
import React from 'react'
import { Checkbox, FlexRow, Text } from 'quark-web'
import { grey1 } from 'quark-web/styles'

const TagList = ({ component, active }) =>
    component.tags.map(tag => (
        <Checkbox
            key="tag"
            style={active ? styles.activeTag : styles.tag}
            content={<Text style={active ? styles.activeText : styles.text}>{tag.slice(6)}</Text>}
        >
            {false}
        </Checkbox>
    ))

const tagStyle = {
    height: 28
}

const styles = {
    tag: {
        ...tagStyle,
        backgroundColor: grey1
    },
    activeTag: {
        ...tagStyle
    },
    activeText: {
        color: 'white'
    },
    text: {}
}

export default TagList
