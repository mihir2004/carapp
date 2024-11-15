import axios from "axios";
import API_BASE_URL from "../config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Send cookies and credentials
});

export const registerUser = async (userData) =>
  api.post("/auth/register", userData);
export const loginUser = async (userData) => api.post("/auth/login", userData);
export const logoutUser = async () => api.post("/auth/logout");
