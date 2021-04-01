
import React, { createContext, useState } from 'react';

export const UsersContext = createContext({
  users: {},
  setUsers: () => {}
});

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;