import React, { useState } from "react";
import { isLoggedContext, IsloggedContextType } from "../contexts/DataContext";

type ContextsProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function ContextsProvider(props: ContextsProviderProps) {
  const { children } = props;

  const [isLogged, setIsLogged] = useState(false);

  const userIsLogged = () => setIsLogged(!isLogged);

  const isLoggedData: IsloggedContextType = {
    isLogged,
    userIsLogged,
  };

  return (
    <isLoggedContext.Provider value={isLoggedData}>
      {children}
    </isLoggedContext.Provider>
  );
}
