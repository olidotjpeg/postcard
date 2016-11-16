import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    browserHistory
} from 'react-router';
import Home from './Containers/Home';
import NoMatch from './Containers/noMatch';
import Create from './Containers/Create';
import User from './Containers/User';
import Login from './Containers/Login';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/create/:id" component={Create} />
    <Route path="/user" component={User} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('root'));
