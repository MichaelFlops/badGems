import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main'
import NavBar from './components/Main'
import IssueDetail from './components/IssueDetail'

// using an ES6 transpiler, like babel
import { Router, Route, Link } from 'react-router'


// Render the main component into the dom
ReactDOM.render((
    <Router>
      <Route path="/" component={App} />
      <Route path="/details" component={IssueDetail} />
    </Router>
  ), document.getElementById('app'));
