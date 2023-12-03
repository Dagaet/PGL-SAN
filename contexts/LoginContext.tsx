import React from "react";

type LoginContextUserDefaultType = {
  userName: string;
  userPassword: string;
};

type IsloggedContextType = {
  isLogged: boolean;
  userIsLogged: Function;
};

const defaultUserContext = React.createContext(
  {} as LoginContextUserDefaultType
);
const isLoggedContext = React.createContext({} as IsloggedContextType);

export {
  isLoggedContext,
  defaultUserContext,
  LoginContextUserDefaultType,
  IsloggedContextType,
};
