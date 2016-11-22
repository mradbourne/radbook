import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import SearchPage from './modules/SearchPage'
import ContactDetailPage from './modules/ContactDetailPage'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SearchPage} />
      <Route path="/:contactName" component={ContactDetailPage} />
    </Route>
  </Router>
  ), document.getElementById('app')
)
