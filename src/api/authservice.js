import axios from "axios";
import { API_URL } from "./settings";

export const authService = axios.create({ baseURL: API_URL + "auth/" });
authService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("unauthorized");
      localStorage.removeItem("token");
      return false;
    }
    else if (error.response.status === 400) {
      console.dir(error.response);
      return false;
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
  // .catch((e) => {
  //   console.log("catched error", e);
  //   if (e.request && e.request.status == 401) {
  //     console.log("401");

  //     console.log(e);
  //   } else {
  //     console.log("not 401");

  //     throw e;
  //   }
  // });
  localStorage.removeItem("token");
  console.log("removetoken");
  localStorage.removeItem("user");
  console.log("remove user");
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
    .then((request) => console.log(request.status, request.data))
    .then(() => (output = true))
    .catch((e) => {
      console.dir(e);
      output = false;
    });
  // await serviceMe();
  return output;
};
