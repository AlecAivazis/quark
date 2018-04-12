// App.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, Redirect } from 'react-router-dom'
import { FlexRow, FlexColumn } from 'quark-web'
// local imports
import GettingStarted from '../GettingStarted'
import Design from '../Design'
import ComponentDetails from '../ComponentDetails'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './styles'

const App = () => (
    <FlexColumn>
        <div>hot World!</div>
        <FlexRow>
            <Sidebar />
            <FlexColumn style={styles.content}>
                <Switch>
                    <Route path="/getting-started" component={GettingStarted} />
                    <Route path="/design" component={Design} />
                    <Route path="/components/:section/:name" component={ComponentDetails} />
                    <Redirect to="/getting-started" />
                </Switch>
            </FlexColumn>
        </FlexRow>
    </FlexColumn>
)

export default hot(module)(App)
