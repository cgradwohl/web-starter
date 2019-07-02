import React from 'react';
import ReactDOM from 'react-dom';
import './static/custom-bulma.min.css';

const App = () => (
  <div>
    <span>Hello React, Webpack 4 & Babel 7!</span>
    <button type="button" className="button is-primary">Login</button>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
