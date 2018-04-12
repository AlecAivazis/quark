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
import './reset.css'

const App = () => (
    <FlexColumn style={styles.container}>
        <Header />
        <FlexRow grow={1}>
            <Sidebar />
            <FlexColumn style={styles.content} grow={1}>
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
