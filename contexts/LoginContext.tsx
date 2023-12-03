import React from "react";

type LoginContextUserDefaultType = {
  defaultUser: object;
};
type LoginContextUserType = {
  user: object;
};
type IsloggedContextType = {
  isLogged: boolean;
  userIsLogged: Function;
};

const defaultUserContext = React.createContext(
  {} as LoginContextUserDefaultType
);
const userGivenContext = React.createContext({} as LoginContextUserType);
const isLoggedContext = React.createContext({} as IsloggedContextType);

export {
  isLoggedContext,
  defaultUserContext,
  userGivenContext,
  LoginContextUserType,
  LoginContextUserDefaultType,
  IsloggedContextType,
};
