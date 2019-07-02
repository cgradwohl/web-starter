import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Index from '../pages/Index';
import About from '../pages/About';

export default () => (
  <Router>
    <Link to="/">
      <button className="button is-primary" type="button">Home</button>
    </Link>
    <Link to="/about">
      <button className="button is-primary" type="button">About</button>
    </Link>

    <Route path="/" exact component={Index} />
    <Route path="/about" component={About} />
  </Router>
);
