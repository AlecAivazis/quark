// @flow
// external imports
import * as React from 'react'
import { Text } from 'quark-web'
// local imports
import styles from './styles'

export type OptionValue = string | number | Boolean

type Props = {
    value: OptionValue,
    active: boolean,
    selected: boolean,
    style: {}
}

const Option = ({ value, active, selected, style, ...unused }: Props) => {
    // the style to apply to the element
    let elementStyle = { ...styles.container }
    if (active) {
        Object.assign(elementStyle, styles.active)
    }
    if (selected) {
        Object.assign(elementStyle, styles.selected)
    }

    return (
        <Text>
            <div style={{ ...elementStyle, ...style }} {...unused} />
        </Text>
    )
}

export default Option
