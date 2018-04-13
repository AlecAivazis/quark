// external imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// local imports
import ComponentSplash from './ComponentSplash'
import ComponentDetails from './ComponentDetails'

const Components = () => (
    <Switch>
        <Route path="/components/:section/:component" component={ComponentDetails} />
        <Route path="/components/" component={ComponentSplash} />
    </Switch>
)

export default Components
