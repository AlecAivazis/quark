// App.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, Redirect } from 'react-router-dom'
import { App as AppContainer, FlexRow, FlexColumn } from 'quark-web'
// local imports
import GettingStarted from '../GettingStarted'
import Design from '../Design'
import Components from '../Components'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './styles'
import './reset.css'

const App = () => (
    <AppContainer>
        <Header />
        <FlexRow grow={1} style={styles.container}>
            <Sidebar style={styles.sidebar} />
            <FlexColumn style={styles.content} grow={1}>
                <Switch>
                    <Route path="/getting-started" component={GettingStarted} />
                    <Route path="/design" component={Design} />
                    <Route path="/components" component={Components} />
                    <Redirect to="/getting-started" />
                </Switch>
            </FlexColumn>
        </FlexRow>
    </AppContainer>
)

export default hot(module)(App)
