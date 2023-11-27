import { mockUser } from "./mock";

export const serviceLogin = async (username, password) => {
  localStorage.setItem("token", "token");
  await serviceMe();
  return true;
};

export const serviceLogout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const serviceMe = async () => {
  const user = mockUser;
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

export const serviceRegistration = async (username, password) => {
  return true;
};
