import React from "react";

type userDataContextType = {
  isLogged: boolean;
  userIsLogged: Function;
  name: string;
  setUser: Function;
};

const userDataContext = React.createContext({} as userDataContextType);

export { userDataContext, userDataContextType };
