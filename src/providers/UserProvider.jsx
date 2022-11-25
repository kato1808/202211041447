import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { Children } = props;
  const contextName = "加藤";
  return (
    <UserContext.Provider value={{ contextName }}>
      {Children}
    </UserContext.Provider>
  );
};