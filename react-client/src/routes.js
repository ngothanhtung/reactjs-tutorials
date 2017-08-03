import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
);

export default Routes;