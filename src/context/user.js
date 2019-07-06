import React from 'react';

const UserContext = React.createContext();

const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

const UserProvider = (props) => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  const value = React.useMemo(() => [user, setUser], [user]);

  return <UserContext.Provider value={value} {...props} />;
};

export {
  UserProvider,
  useUser,
};
