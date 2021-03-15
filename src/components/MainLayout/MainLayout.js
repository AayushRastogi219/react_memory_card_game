import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import {
  Cards,
  EndGame,
  Home
} from '../../components'

const MainLayout = ({ className }) => (
  <BrowserRouter>
    <div className={className}>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Cards} />
          <Route path="/end-game" component={EndGame} />
      </Switch>
    </div>
  </BrowserRouter>
)
export default MainLayout