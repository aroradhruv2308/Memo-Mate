import axios from "axios";

export const registerUser = async (userCreds) => {
  let config = {
    headers: {
      username: userCreds.username,
      password: userCreds.password,
    },
  };

  let data = {};

  let res = await axios.post("http://localhost:3000/signup", data, config);
  return res;
};

export const loginUser = async (userCreds) => {
  let config = {
    headers: {
      username: userCreds.username,
      password: userCreds.password,
    },
  };

  let data = {};

  let res = await axios.post("http://localhost:3000/signin", data, config);
  return res;
};
