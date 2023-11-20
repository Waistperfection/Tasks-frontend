import axios from "axios";
import { API_URL } from "./settings";

export const taskService = axios.create({ baseURL: API_URL + "api/v1/tasks" });

export const getTaskList = async () => {
  let token = localStorage.getItem("token");
  if (!token) {
    throw new Error("authtorisation required");
  }
  const response = await taskService.get("", {
    headers: { Authorization: `token ${token}` },
  });
  console.log(response);
  return response.data;
};

export const getTaskDetail = async (id) => {
  let token = localStorage.getItem("token");
  if (!token) {
    throw new Error("authtorisation required");
  }
  const response = await taskService.get(`${id}/`, {
    headers: { Authorization: `token ${token}` },
  });
  console.log(response);
  return response.data;
};

export const addComment = async (taskId, commentBody, answerTo=null) => {
  let token = localStorage.getItem("token");
  if (!token) {
    throw new Error("authtorisation required");
  }
  const response = await taskService.post(
    `${taskId}/comment/`,
    {
      body: commentBody,
      answer_to: answerTo,
    },
    {
      headers: { Authorization: `token ${token}` },
    }
  );
  console.log(response);
  return response.data;
}
