// external imports
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// local imports
import Introduction from './Introduction'
import GettingStarted from './GettingStarted'

const Design = () => (
    <Switch>
        <Route exact path="/" component={Introduction} />
        <Route path="/getting-started" component={GettingStarted} />
    </Switch>
)

export default Design
