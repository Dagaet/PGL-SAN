import { ImageProps } from "react-native";

export type PersonalDataType = {
  personalImage: ImageProps;
  name: string;
  iconsUrls: string[];
  iconsMedia: ImageProps[];
  info: string;
  qrURL: string;
  informationData: string[];
};

export type LoginContextUserDefaultType = {
  userName: string;
  userPassword: string;
};

export type RecordFile = {
  time: string;
  uri: string;
};
