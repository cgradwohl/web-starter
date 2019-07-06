import React from 'react';
import PropTypes from 'prop-types';

import { UserProvider } from './user';
import { CountProvider } from './count';

const AppProvider = ({ children }) => (
  <UserProvider>
    <CountProvider>
      {children}
    </CountProvider>
  </UserProvider>
);

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
