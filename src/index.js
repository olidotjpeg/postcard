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

let auth = localStorage.getItem('auth');

function requireAuth(nextState, replace) {
    if (!auth) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} onEnter={requireAuth} />
    <Route path="/create/:id" component={Create} onEnter={requireAuth} />
    <Route path="/user" component={User} onEnter={requireAuth} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('root'));
