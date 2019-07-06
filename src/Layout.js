import React from 'react';
import PropTypes from 'prop-types';
import BusyIndicator from 'react-busy-indicator';
import { NotFoundBoundary, useLoadingRoute } from 'react-navi';

import { Flex, Box } from 'rebass';

import Navbar from './components/Navbar';

function renderNotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
    </div>
  );
}

function Layout({ children }) {
  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.
  const loadingRoute = useLoadingRoute();

  return (
    <Flex justifyContent="center">
      <Box
        width={2 / 3}
      >
        <BusyIndicator isBusy={!!loadingRoute} delayMs={200} />
        <Navbar />
        <NotFoundBoundary render={() => renderNotFound()}>
          {children}
        </NotFoundBoundary>
      </Box>
    </Flex>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
