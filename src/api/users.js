import { API, handleError, handleResponse } from "./apiUtils";

export function getUserByEmail(email) {
  console.log("in getUserByEmail", email);
  return API.get(`/users?email=${email}`)
    .then(handleResponse)
    .catch(handleError);
}

export function createUser(user) {
  console.log("in createUser", user);
  return API.post("/users", user).then(handleResponse).catch(handleError);
}
