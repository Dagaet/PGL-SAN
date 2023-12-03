import React, { useState } from "react";
import {
  isLoggedContext,
  defaultUserContext,
  LoginContextUserDefaultType,
  IsloggedContextType,
} from "../contexts/LoginContext";

type LoginProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function LoginProvider(props: LoginProviderProps) {
  const { children } = props;

  const [isLogged, setIsLogged] = useState(false);

  const userIsLogged = () => setIsLogged(!isLogged);

  const defaultUserData: LoginContextUserDefaultType = {
    userName: "Adrian",
    userPassword: "ababol",
  };

  const isLoggedData: IsloggedContextType = {
    isLogged,
    userIsLogged,
  };

  return (
    <defaultUserContext.Provider value={defaultUserData}>
      <isLoggedContext.Provider value={isLoggedData}>
        {children}
      </isLoggedContext.Provider>
    </defaultUserContext.Provider>
  );
}
