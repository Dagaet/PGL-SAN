import React from "react";

type IsloggedContextType = {
  isLogged: boolean;
  userIsLogged: Function;
};

const isLoggedContext = React.createContext({} as IsloggedContextType);

export { isLoggedContext, IsloggedContextType };
