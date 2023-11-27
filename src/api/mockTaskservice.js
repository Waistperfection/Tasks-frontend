import { taskList, workgroups } from "./mock";

export const getTaskList = async () => {
  return taskList;
};

export const getTaskDetail = async (id) => {
  const task = taskList.filter((task) => task?.id == id)[0] || {};
  task.comments = [];
  return task;
};

export const addComment = async (taskId, commentBody, answerTo = null) => {
  return { taskId, commentBody, answerTo };
};

export const getWorkgroupList = async () => {
  return workgroups;
};

export const createNewTask = async (task) => {
  return task;
};
