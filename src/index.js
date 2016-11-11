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
import Build from './Containers/Build';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/create" component={Create} />
    
    <Route path="/build" component={Build} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('root'));
