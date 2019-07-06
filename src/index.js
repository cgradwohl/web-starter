import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import { library } from '@fortawesome/fontawesome-svg-core';
import fontawesome from './utils/fontawesome';
import AppTheme from './theme';
import { ThemeProvider } from 'styled-components';

import Layout from './Layout';

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
  <ThemeProvider theme={AppTheme}>
    <Router routes={routes}>
      <Layout>
        <Suspense fallback={null}>
          <View />
        </Suspense>
      </Layout>
    </Router>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
