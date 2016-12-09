import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './components/home';
import Stuff from './components/stuff';
import Contact from './components/contact';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='stuff' component={Stuff} />
            <Route path='contact' component={Contact} />
        </Route>
    </Router>
    , document.getElementById('root')
);
