import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './modules/App';
import SearchPage from './modules/SearchPage';
import ContactDetailPage from './modules/ContactDetailPage';
import NoMatch from './modules/NoMatch';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SearchPage} />
      <Route path="contacts/:id" component={ContactDetailPage} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
  ), document.getElementById('app')
)
