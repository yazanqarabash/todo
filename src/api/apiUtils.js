import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3030",
});

export async function handleResponse(response) {
  let data = null;
  let error = null;
  switch (response.status) {
    case 200: // ok
    case 201: // created
    console.log("res", response);
      data = await response.data;
      return data;
    case 404: // not found
    case 500: // server error
      error = await response.text();
      throw new Error(error);
    default:
      throw new Error("Network response was not ok.");
  }
}

export function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}
