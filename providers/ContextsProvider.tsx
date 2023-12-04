import React, { useState } from "react";
import {
  isLoggedContext,
  defaultUserContext,
  LoginContextUserDefaultType,
  IsloggedContextType,
  PersonalDataType,
  personalDataContext,
} from "../contexts/DataContext";

type ContextsProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function ContextsProvider(props: ContextsProviderProps) {
  const { children } = props;

  const [isLogged, setIsLogged] = useState(false);

  const userIsLogged = () => setIsLogged(!isLogged);

  const defaultUserData: LoginContextUserDefaultType = {
    userName: "Adrian",
    userPassword: "ababol",
  };

  const personalData: PersonalDataType = {
    personalImage: require("../assets/SaulEn20Anos.jpg"),
    name: "Saúl Arteaga Noda",
    iconsUrls: ["@Dagaet", "@TwitterDeSaúl", "Saúl Arteaga Noda"],
    iconsMedia: [
      require("../assets/logoInsta.png"),
      require("../assets/logoTwitter.png"),
      require("../assets/logolinkeding.png"),
    ],
    info: "Un pive de La Gomera que está estudiando en Tenerife",
    qrURL: "https://github.com/Dagaet",
    informationData: [
      "Metal Gear Solid",
      "Loh Cocheh",
      "Lah Muhere",
      "Loh Kamioneh",
    ],
  };

  const isLoggedData: IsloggedContextType = {
    isLogged,
    userIsLogged,
  };

  return (
    <defaultUserContext.Provider value={defaultUserData}>
      <isLoggedContext.Provider value={isLoggedData}>
        <personalDataContext.Provider value={personalData}>
          {children}
        </personalDataContext.Provider>
      </isLoggedContext.Provider>
    </defaultUserContext.Provider>
  );
}
