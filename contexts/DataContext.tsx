import React from "react";

type IsloggedContextType = {
  isLogged: boolean;
  userIsLogged: Function;
};

type userLoggedContextType = {
  name: string;
  setUser: Function;
};

const isLoggedContext = React.createContext({} as IsloggedContextType);
const userLoggedContext = React.createContext({} as userLoggedContextType);

export {
  isLoggedContext,
  userLoggedContext,
  IsloggedContextType,
  userLoggedContextType,
};
