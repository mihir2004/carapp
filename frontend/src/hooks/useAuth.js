import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, logoutUser } from "../api/auth";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Example check if user is authenticated
    setIsAuthenticated(!!sessionStorage.getItem("userId"));
  }, []);

  const login = async (values) => {
    try {
      await loginUser(values);
      setIsAuthenticated(true);
      sessionStorage.setItem("userId", values.email); // Simple session storage example
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    await logoutUser();
    setIsAuthenticated(false);
    sessionStorage.removeItem("userId");
    navigate("/login");
  };

  return { isAuthenticated, login, logout };
};
