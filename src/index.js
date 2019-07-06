import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';

import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

import { library } from '@fortawesome/fontawesome-svg-core';
import fontawesome from './utils/fontawesome';

import Layout from './Layout';
import AppTheme from './theme';
import Index from './pages/Index';
import About from './pages/About';

library.add(fontawesome);

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
