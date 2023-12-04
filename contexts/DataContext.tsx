import React from "react";
import { ImageProps } from "react-native";

type LoginContextUserDefaultType = {
  userName: string;
  userPassword: string;
};

type PersonalDataType = {
  personalImage: ImageProps;
  name: string;
  iconsUrls: string[];
  iconsMedia: ImageProps[];
  info: string;
  qrURL: string;
  informationData: string[];
};

type IsloggedContextType = {
  isLogged: boolean;
  userIsLogged: Function;
};

const defaultUserContext = React.createContext(
  {} as LoginContextUserDefaultType
);
const isLoggedContext = React.createContext({} as IsloggedContextType);
const personalDataContext = React.createContext({} as PersonalDataType);

export {
  isLoggedContext,
  defaultUserContext,
  LoginContextUserDefaultType,
  IsloggedContextType,
  personalDataContext,
  PersonalDataType,
};
