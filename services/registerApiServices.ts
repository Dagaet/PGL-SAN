import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  postLoginRequest,
  postLogoutRequest,
  postRegisterRequest,
} from "./requestService";

const LOGIN_API_URL = "http://172.16.103.249:8888/users";
const LOGIN_PATH = "/login";
const REGISTER_PATH = "/register";
const LOGOUT_PATH = "/logout";

type UserDataResponse = {
  id: number;
  name: string;
  email: string;
};

export const loginUser = async (
  name: string,
  password: string
): Promise<string | null> => {
  const response = await fetch(
    LOGIN_API_URL + LOGIN_PATH,
    postLoginRequest(name, password)
  );
  const storeData = async (cookie: string | null) => {
    try {
      if (cookie != null) {
        await AsyncStorage.setItem("loginCookie", cookie);
      }
    } catch (error) {}
  };

  const cookie: string | null = response.headers.get("Set-Cookie");
  console.log(cookie);
  storeData(cookie);

  if (response.status === 200) {
    const json: UserDataResponse = await response.json();

    if (json != null) {
      return json.name;
    }
  }

  if (response.status === 400) {
    return null;
  }
  return "Error";
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<string | null> => {
  const response = await fetch(
    LOGIN_API_URL + REGISTER_PATH,
    postRegisterRequest(name, email, password)
  );

  const storeData = async (cookie: string | null) => {
    try {
      if (cookie != null) {
        await AsyncStorage.setItem("loginCookie", cookie);
      }
    } catch (error) {}
  };

  const cookie: string | null = response.headers.get("Set-Cookie");
  storeData(cookie);

  if (response.status === 201) {
    const json: UserDataResponse = await response.json();

    if (json != null) {
      return json.name;
    }
  }

  if (response.status === 400) {
    return null;
  }
  return "Error";
};

export const logoutUser = async (
  name: string,
  email: string,
  password: string
): Promise<string | null> => {
  const response = await fetch(
    LOGIN_API_URL + LOGOUT_PATH,
    postLogoutRequest()
  );
  if (response.status === 200) {
    const json: UserDataResponse = await response.json();

    if (json != null) {
      return json.name;
    }
  }
  return "Error";
};
