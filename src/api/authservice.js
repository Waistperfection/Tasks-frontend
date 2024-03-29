import axios from "axios";
import { API_URL } from "./settings";

export const authService = axios.create({ baseURL: API_URL + "api/v1/auth/" });

authService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("unauthorized");
      localStorage.removeItem("token");
      return error;
    } else if (error.response.status === 400) {
      // console.dir(error.response);
      // const errData = [];
      // for (const key in error.response.data) {
      //   errData.push(error.response.data[key]);
      // }
      // console.log(errData.join("\n"));
      console.log("400 error")
      throw error;
    }
    return error;
  }
);

// login func
export const serviceLogin = async (username, password) => {
  let token = await authService
    .post("token/login/", { username: username, password: password })
    .then((request) => request.data["auth_token"]);
  localStorage.setItem("token", token);
  await serviceMe();
  return true;
};

export const serviceLogout = async () => {
  let token = localStorage.getItem("token");
  authService.post(
    "token/logout",
    { token },
    { headers: { Authorization: `token ${localStorage.getItem("token")}` } }
  );
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// function to get user data
export const serviceMe = async () => {
  let user = await authService
    .get("users/me/", {
      headers: { Authorization: `token ${localStorage.getItem("token")}` },
    })
    .then((request) => request.data);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

export const serviceRegistration = async (username, password) => {
  let output;
  await authService
    .post("users/", { username: username, password: password })
    .then(() => (output = true))
    .catch((e) => {
      // console.dir(e);
      throw e;
      output = false;
    });
  // await serviceMe();
  return output;
};
