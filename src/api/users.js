import { API, handleError, handleResponse } from "./apiUtils";

export function getUserByEmail(email) {
  return API.get(`/users?email=${email}`)
    .then(handleResponse)
    .catch(handleError);
}

export function createUser(user) {
  return API.post("/users", user).then(handleResponse).catch(handleError);
}
