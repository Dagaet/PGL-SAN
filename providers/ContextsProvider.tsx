import React, { useState } from "react";
import {
  isLoggedContext,
  userLoggedContext,
  IsloggedContextType,
  userLoggedContextType,
} from "../contexts/DataContext";

type ContextsProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function ContextsProvider(props: ContextsProviderProps) {
  const { children } = props;

  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");

  const setUser = (data: string) => setName(data);

  const userIsLogged = () => setIsLogged(!isLogged);

  const isLoggedData: IsloggedContextType = {
    isLogged,
    userIsLogged,
  };

  const userData: userLoggedContextType = {
    name,
    setUser,
  };

  return (
    <isLoggedContext.Provider value={isLoggedData}>
      <userLoggedContext.Provider value={userData}>
        {children}
      </userLoggedContext.Provider>
    </isLoggedContext.Provider>
  );
}
