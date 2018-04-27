// external imports
import React from 'react'
import { Link, Route } from 'react-router-dom'
// local imports
import { Title, FlexRow, Text } from 'quark-web'
import { grey5 } from 'quark-web/styles'
import { primaryColor } from 'src/colors'
import TagList from './TagList'

const PageLink = ({ exact, to, style, textStyle, children, component }) => (
    <Link to={to}>
        <Route exact={exact} path={to}>
            {({ match }) => (
                <FlexRow
                    alignItems="center"
                    style={{ ...(match ? styles.activeLink : styles.link), ...style }}
                >
                    {children ? (
                        <span
                            style={{
                                ...(match ? styles.activeText : styles.text),
                                ...textStyle
                            }}
                        >
                            {children}
                        </span>
                    ) : (
                        <React.Fragment>
                            <Text
                                style={{
                                    ...(match ? styles.activeText : styles.text),
                                    ...textStyle
                                }}
                            >
                                {component.name}
                            </Text>
                            <TagList component={component} active={match} />
                        </React.Fragment>
                    )}
                </FlexRow>
            )}
        </Route>
    </Link>
)

const textStyle = {
    fontWeight: '400',
    marginRight: 8,
    fontSize: 16
}

const styles = {
    container: {
        cursor: 'pointer'
    },
    link: {
        padding: 8
    },
    activeLink: {
        backgroundColor: grey5,
        padding: 6,
        paddingLeft: 8,
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 3
    },
    activeText: {
        ...textStyle,
        color: 'white'
    },
    text: {
        ...textStyle,
        color: grey5
    }
}

export default PageLink
