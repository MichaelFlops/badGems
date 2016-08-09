import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main'

// using an ES6 transpiler, like babel
import { Router, Route, Link } from 'react-router'


// Render the main component into the dom
ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <Route path="detail" component={IssueDetail} />
        <Route path="inbox" component={Inbox}>
          <Route path="messages/:id" component={Message} />
        </Route>
      </Route>
    </Router>
  ), document.getElementById('app'));
