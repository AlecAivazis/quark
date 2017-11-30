// @flow
// external imports
import React from 'react'
import { View, StyleSheet, ViewProperties } from 'react-native'
// local imports
import { grey2 } from 'quark-core/styles'
import { GetTheme } from 'quark-core'

const Card = ({ style, ...unused }: ViewProperties) => (
    <GetTheme>
        {({ grey2, white }) => (
            <View
                style={[
                    styles.container,
                    { borderColor: grey2, shadowColor: grey2, backgroundColor: white },
                    style
                ]}
                {...unused}
            />
        )}
    </GetTheme>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: 1,
        shadowOpacity: 0.54,
        shadowRadius: 4,
        shadowOffset: { width: 2, height: 2 }
    }
})

export default Card
