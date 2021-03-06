// App.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, Redirect } from 'react-router-dom'
import { App, FlexRow, FlexColumn } from 'quark-web'
// local imports
import { Design, Basics, ComponentDetails } from '..'
import Sidebar from './Sidebar'
import styles from './styles'
import './reset.css'

const Root = () => (
    <App style={styles.container}>
        <Sidebar style={styles.sidebar} />
        <FlexColumn style={styles.content} grow={1}>
            <Switch>
                <Route path="/design" component={Design} />
                <Route path="/components/:section/:component" component={ComponentDetails} />
                <Route path="/" component={Basics} />
                <Redirect to="/" />
            </Switch>
        </FlexColumn>
    </App>
)

export default hot(module)(Root)
