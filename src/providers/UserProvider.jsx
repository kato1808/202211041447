import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { Children } = props;
  const contextName = "abs";
  return (
    <UserContext.Provider value={{ contextName }}>
      {Children}
    </UserContext.Provider>
  );
};
