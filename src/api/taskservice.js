import axios from "axios";
import { API_URL } from "./settings";

export const taskService = axios.create({ baseURL: API_URL + "api/v1" });

taskService.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log(error);
    if (axios.isAxiosError(error)) {
      console.log(error.response, error.response?.status);
      switch (error.response?.status) {
        case 400:
          alert("Запрос выполнен некорректно, повторите еще раз");
          break;
        case 401:
          alert("Проблемы с авторизацией, перелогинтесь");
          break;
        case 403:
          alert("У вас нет прав доступа обратитесь к админестратору");
          break;
        case 404:
          alert("Вы запросили доступ к несуществующему ресурсу");
          break;
        case 500:
          alert("Ошибка сервера, попробуйте позже");
          break;
        default:
          alert("Неизвестная ошибка, попробуйте позже");
      }
    }
  }
);

function getTokenOrExseption() {
  let token = localStorage.getItem("token");
  if (!token) {
    throw new Error("authtorisation required");
  }
  return token;
}

export const getTaskList = async () => {
  const token = getTokenOrExseption();
  const response = await taskService.get("tasks", {
    headers: { Authorization: `token ${token}` },
  });
  return response.data;
};

export const getTaskDetail = async (id) => {
  const token = getTokenOrExseption();
  const response = await taskService.get(`tasks/${id}/`, {
    headers: { Authorization: `token ${token}` },
  });
  return response.data;
};

export const addComment = async (taskId, commentBody, answerTo = null) => {
  const token = getTokenOrExseption();
  const response = await taskService.post(
    `tasks/${taskId}/comments/`,
    {
      task: taskId,
      body: commentBody,
      answer_to: answerTo,
    },
    {
      headers: { Authorization: `token ${token}` },
    }
  );
  // TODO update this method if it returns undefinded it will be added to comment and broke workflow (think same about other methods) mb return false and catch this in component
  return response?.data;
};

export const getWorkgroupList = async () => {
  const token = getTokenOrExseption();
  const response = await taskService.get("workgroups/", {
    headers: { Authorization: `token ${token}` },
  });
  return response.data;
};

export const getWorkgroupDateil = async (id) => {
  const token = getTokenOrExseption();
  const response = await taskService.get(`workgroups/${id}/`, {
    headers: { Authorization: `token ${token}` },
  });
  return response.data;
};

export const joinWorkgroup = async (id) => {
  const token = getTokenOrExseption();
  const response = await taskService.post(`workgroups/${id}/join/`);
};
export const createWorkgroup = async (name) => {
  const token = getTokenOrExseption();
  const response = await taskService.post(
    "workgroups/",
    { name },
    { headers: { Authorization: `token ${token}` } }
  );
  return response.data;
};

export const createNewTask = async (task) => {
  const token = getTokenOrExseption();
  const response = await taskService.post("tasks/", task, {
    headers: { Authorization: `token ${token}` },
  });
  return response.data;
};

export const getFreeWorkers = async () => {
  const token = getTokenOrExseption();
  const response = await taskService.get("free-workers/", {
    headers: { Authorization: `token ${token}` },
  });
  return response.data;
};

export const getInvites = async () => {
  const token = getTokenOrExseption();
  const response = await taskService.get("invites/", {
    headers: { Authorization: `token ${token}` },
  });
  return response.data;
};

export const deleteInvite = async (id) => {
  const token = getTokenOrExseption();
  const response = await taskService.delete(`/invites/${id}/`, {
    headers: { Authorization: `token ${token}` },
  });
  console.dir(response);
  console.log(typeof response.status);
  return response.status == 204;
};

export const createNewInvite = async (invite) => {
  const token = getTokenOrExseption();
  const response = await taskService.post(
    "/invites/",
    { ...invite },
    { headers: { Authorization: `token ${token}` } }
  );
  return response.data;
};
export const acceptInvite = async (code) => {
  const token = getTokenOrExseption();
  const response = await taskService.get(`invites/${code}/accept/`, {
    headers: { Authorization: `token ${token}` },
  });
  return response.data;
};
