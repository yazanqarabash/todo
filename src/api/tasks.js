import { API, handleError, handleResponse } from "./apiUtils";

export function getTasks() {
  return API.get("/tasks").then(handleResponse).catch(handleError);
}

export function addTask(task) {
  return API.post("/tasks", task).then(handleResponse).catch(handleError);
}

export function editTask(task) {
  return API.put(`/tasks/${task.id}`, task)
    .then(handleResponse)
    .catch(handleError);
}

export function deleteTask(taskId) {
  return API.delete(`/tasks/${taskId}`).then(handleResponse).catch(handleError);
}
