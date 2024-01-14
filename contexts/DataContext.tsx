import React from "react";

type userDataContextType = {
  isLogged: boolean;
  name: string;
  userIsLogged: Function;
  setUser: Function;
};

const userDataContext = React.createContext({} as userDataContextType);

export { userDataContext, userDataContextType };
