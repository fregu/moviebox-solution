import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeView from 'views/HomeView'
import SingleView from 'views/SingleView'
import 'base/index.css'

const App = () => (
  <Switch>
    <Route exact path="/:type/:id" component={SingleView} />
    <Route component={HomeView} />
  </Switch>
)
export default App
