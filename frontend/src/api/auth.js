import axios from "axios";
import API_BASE_URL from "../config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Ensures cookies (for session) are sent
});

export const registerUser = async (userData) => {
  return api.post("/auth/register", userData);
};

export const loginUser = async (userData) => {
  return api.post("/auth/login", userData);
};

export const logoutUser = async () => {
  return api.post("/auth/logout");
};
