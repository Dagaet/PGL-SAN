import { postLoginRequest } from "./requestService";

const LOGIN_API_URL = "http://192.168.0.15:8888/users";
const LOGIN_PATH = "/login";
const REGISTER_PATH = "/register";
const LOGOUT_PATH = "/logout";

type BoredActivityResponse = {
  activity: string;
};

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
  const json: UserDataResponse = await response.json();

  if (json != null) {
    return json.name;
  }
  if (response.status == 201) {
    const json: UserDataResponse = await response.json();

    if (json != null) {
      return json.name;
    }
  }

  if (response.status == 400) {
    return null;
  }
  return "Error";
};
