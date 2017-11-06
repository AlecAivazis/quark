// @flow
// external imports
import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import _ from 'lodash'
// local imports
import CardPlaceholder from './Placeholder'

type Props = {
    style: number,
    children: React.Element<*>,
    nCols?: number,
    padding?: number,
    unused: {}
}

const CardGrid = ({
    style,
    children,
    nCols = 3,
    padding = 40,
    ...unused
}: Props) => {
    // the style for cards
    const card = {
        marginBottom: padding,
        marginRight: padding
    }
    // the style of the last card
    const lastCard = {
        marginBottom: padding
    }

    // get the list of children
    const cards = React.Children.toArray(children)

    return (
        <ScrollView {...unused} style={[styles.container, style]}>
            {_.chunk(cards, nCols).map((row, i) => (
                <View style={styles.row} key={`row-${i}`}>
                    {row.map((child, i) => {
                        // the style to apply to the card
                        const cardStyle = i === row.length - 1 ? lastCard : card
                        return (
                            <View
                                style={[styles.card, cardStyle]}
                                key={`card-${i}`}
                            >
                                {child}
                            </View>
                        )
                    })}
                    {[...new Array(nCols - row.length)].map((_, i) => (
                        <CardPlaceholder
                            style={styles.cardWrapper}
                            key={`placeholder-${i}`}
                        />
                    ))}
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F9F9',
        padding: 40
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    cardWrapper: {
        flex: 1,
        marginRight: 40,
        marginBottom: 40
    },
    card: {
        flex: 1
    }
})

export default CardGrid
