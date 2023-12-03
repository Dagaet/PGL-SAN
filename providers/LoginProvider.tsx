import React, { useState } from "react";
import {
  isLoggedContext,
  defaultUserContext,
  userGivenContext,
  LoginContextUserType,
  LoginContextUserDefaultType,
  IsloggedContextType,
} from "../contexts/LoginContext";

type LoginProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function LoginProvider(props: LoginProviderProps) {
  const { children } = props;
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const [defaultUser, setDefaultUser] = useState({
    name: "Adrian",
    password: "ñomblon",
  });

  const [isLogged, setIsLogged] = useState(false);

  const userIsLogged = () => {
    if (user == defaultUser) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  const userData: LoginContextUserType = {
    user,
  };
  const defaultUserData: LoginContextUserDefaultType = {
    defaultUser,
  };
  const isLoggedData: IsloggedContextType = {
    isLogged,
    userIsLogged,
  };

  return (
    <defaultUserContext.Provider value={defaultUserData}>
      <userGivenContext.Provider value={userData}>
        <isLoggedContext.Provider value={isLoggedData}>
          {children}
        </isLoggedContext.Provider>
      </userGivenContext.Provider>
    </defaultUserContext.Provider>
  );
}
