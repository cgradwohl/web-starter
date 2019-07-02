import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout';

import './static/custom-bulma.min.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const App = () => (
  <Layout>
    <React.Suspense fallback={<div>Loading...</div>}>
      <div>
        <span>Hello React, Webpack 4 & Babel 7!</span>
        <button type="button" className="button is-primary">Login</button>
      </div>
    </React.Suspense>
  </Layout>
);

ReactDOM.render(<App />, document.querySelector('#root'));
