import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import fontawesome from './utils/fontawesome';

import Layout from './Layout';
import Error from './pages/Error';

import Navbar from './components/Navbar';

import './static/custom-bulma.min.css';

library.add(fontawesome);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const App = () => (
  <Error>
    <Layout>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div>
          <Navbar />
        </div>
      </React.Suspense>
    </Layout>
  </Error>
);

ReactDOM.render(<App />, document.querySelector('#root'));
