import React from 'react';
import PropTypes from 'prop-types';
import BusyIndicator from 'react-busy-indicator';
import { NotFoundBoundary, useLoadingRoute } from 'react-navi';

import Navbar from './components/Navbar';

function renderNotFound() {
  return (
    <div className="Layout-error">
      <h1>404 - Not Found</h1>
    </div>
  );
}

function Layout({ children }) {
  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.
  const loadingRoute = useLoadingRoute();

  return (
    <div className="container is-widescreen">
      {/* This component shows a loading indicator after a delay */}
      <BusyIndicator isBusy={!!loadingRoute} delayMs={200} />
      <Navbar />
      <main>
        <NotFoundBoundary render={() => renderNotFound()}>
          {children}
        </NotFoundBoundary>
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
