// @flow
// external imports
import * as React from 'react'
import { Text } from 'quark-web'
// local imports
import { GetTheme } from 'quark-core'
import styles from './styles'

export type OptionValue = string | number | Boolean

type Props = {
    value: OptionValue,
    active: boolean,
    selected: boolean,
    style: {}
}

const Option = ({ value, active, selected, style, ...unused }: Props) => (
    <GetTheme>
        {({ primaryColor, grey1 }) => {
            // the style to apply to the element
            let elementStyle = { ...styles.container }
            if (active) {
                Object.assign(elementStyle, styles.active, {
                    backgroundColor: grey1
                })
            }
            if (selected) {
                Object.assign(elementStyle, styles.selected, {
                    color: primaryColor
                })
            }

            return (
                <Text>
                    <div style={{ ...elementStyle, ...style }} {...unused} />
                </Text>
            )
        }}
    </GetTheme>
)

export default Option
