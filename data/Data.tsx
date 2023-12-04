import {
  LoginContextUserDefaultType,
  PersonalDataType,
} from "../types/DataTypes";

export const personalData: PersonalDataType = {
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
    "La musica",
  ],
};

export const defaultUserData: LoginContextUserDefaultType = {
  userName: "Adrian",
  userPassword: "ababol",
};
