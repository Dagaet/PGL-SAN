const BORED_API_URL = "https://www.boredapi.com";
const ACTIVITIES_PATH = "/api/activity";

type BoredActivityResponse = {
  activity: string;
};

const getInitRequest = (httpVerb: string) => {
  const init: RequestInit = {
    method: httpVerb,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  return init;
};

export const getActivity = async (): Promise<string> => {
  const response = await fetch(
    BORED_API_URL + ACTIVITIES_PATH,
    getInitRequest("GET")
  );
  const json: BoredActivityResponse = await response.json();

  if (json != null) {
    return json.activity;
  }
  return "Error";
};
