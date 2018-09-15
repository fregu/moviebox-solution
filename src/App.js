import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomeView from 'views/HomeView'
import SingleView from 'views/SingleView'
import 'base/index.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeView} />
    <Route exact path="/:type/:id" component={SingleView} />
    <Redirect to="/" />
  </Switch>
)
export default App
