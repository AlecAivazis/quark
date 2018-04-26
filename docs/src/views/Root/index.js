// App.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, Redirect } from 'react-router-dom'
import { App, FlexRow, FlexColumn } from 'quark-web'
// local imports
import GettingStarted from '../GettingStarted'
import Design from '../Design'
import Components from '../Components'
import Sidebar from './Sidebar'
import styles from './styles'
import './reset.css'

const Root = () => (
    <App style={styles.container}>
        <Sidebar style={styles.sidebar} />
        <FlexColumn style={styles.content} grow={1}>
            <Switch>
                <Route exact path="/" component={GettingStarted} />
                <Route path="/design" component={Design} />
                <Route path="/components" component={Components} />
                <Redirect to="/" />
            </Switch>
        </FlexColumn>
    </App>
)

export default hot(module)(Root)
