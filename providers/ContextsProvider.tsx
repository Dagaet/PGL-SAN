import React, { useState } from "react";
import { userDataContext, userDataContextType } from "../contexts/DataContext";

type ContextsProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function ContextsProvider(props: ContextsProviderProps) {
  const { children } = props;

  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");

  const setUser = (username: string) => setName(username);
  const userIsLogged = () => setIsLogged(!isLogged);

  const userLoggedData: userDataContextType = {
    isLogged,
    name,
    userIsLogged,
    setUser,
  };

  return (
    <userDataContext.Provider value={userLoggedData}>
      {children}
    </userDataContext.Provider>
  );
}
