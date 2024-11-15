import { useState } from "react";
import { loginUser } from "../api/auth";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );

  const login = async (values, navigate) => {
    try {
      await loginUser(values); // Call the API
      setIsAuthenticated(true);
      sessionStorage.setItem("isAuthenticated", true); // Persist login state
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = (navigate) => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return { isAuthenticated, login, logout };
};
