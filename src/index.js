import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { mount, route, lazy } from 'navi';
import { Router, View } from 'react-navi';
import { library } from '@fortawesome/fontawesome-svg-core';
import fontawesome from './utils/fontawesome';

import Layout from './Layout';

import './static/custom-bulma.min.css';
import Index from './pages/Index';
import About from './pages/About';

library.add(fontawesome);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const routes = mount({
  '/': route({
    view: <Index />,
  }),
  '/about': route({
    view: <About />,
  }),
});

const App = () => (
  <Router routes={routes}>
    <Layout>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Layout>
  </Router>
);

ReactDOM.render(<App />, document.querySelector('#root'));
