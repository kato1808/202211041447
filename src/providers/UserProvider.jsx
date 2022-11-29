import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUerInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUerInfo }}>
      {children}
    </UserContext.Provider>
  );
};
