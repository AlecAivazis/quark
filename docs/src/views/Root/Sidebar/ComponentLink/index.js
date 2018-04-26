// external imports
import React from 'react'
import { Link, Route } from 'react-router-dom'
// local imports
import { Title, FlexRow, H2 } from 'quark-web'
import { grey5 } from 'quark-web/styles'
import { primaryColor } from 'src/colors'
import TagList from './TagList'

const PageLink = ({ to, children, component }) => (
    <Link to={to}>
        <Route path={to}>
            {({ match }) => (
                <FlexRow alignItems="center" style={match ? styles.activeLink : styles.link}>
                    {children ? (
                        <span style={match ? styles.activeText : styles.text}>{children}</span>
                    ) : (
                        <React.Fragment>
                            <H2 style={match ? styles.activeText : styles.text}>
                                {component.name}
                            </H2>
                            <TagList component={component} active={match} />
                        </React.Fragment>
                    )}
                </FlexRow>
            )}
        </Route>
    </Link>
)

const styles = {
    container: {
        fontWeight: '400',
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
        marginBottom: 2
    },
    activeText: {
        color: 'white',
        marginRight: 8
    },
    text: {
        marginRight: 8,
        color: grey5
    }
}

export default PageLink
