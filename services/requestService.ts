const postLoginRequest = (name: string, password: string) => {
  const init: RequestInit = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      password: password,
    }),
  };
  return init;
};

const postRegisterRequest = (name: string, email: string, password: string) => {
  const init: RequestInit = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  };
  return init;
};

export { postLoginRequest, postRegisterRequest };
