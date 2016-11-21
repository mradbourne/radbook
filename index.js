import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './modules/App'
import ContactListLayout from './modules/ContactListLayout'
import ContactDetail from './modules/ContactDetail'

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={ContactListLayout} />
    </Route>
  </Router>
  ), document.getElementById('app')
)
