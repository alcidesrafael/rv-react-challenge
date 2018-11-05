import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import UsersCont from './containers/Users'
import PostsCont from './containers/Posts'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/users" exact component={UsersCont} />
    <Route path="/posts" exact component={PostsCont} />
    <Redirect from="*" to="/" />
  </Switch>
)

export default Routes
