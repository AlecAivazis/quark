// external imports
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// local imports
import Typography from './Typography'
import Palette from './palette'
import CustomTheme from './CustomTheme'

const Design = () => (
    <Switch>
        <Route path="/design/typography" component={Typography} />
        <Route path="/design/palette" component={Palette} />
        <Route path="/design/customize" component={CustomTheme} />
        <Route render={() => 'design'} />
    </Switch>
)

export default Design
