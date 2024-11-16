// src/App.jsx

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import NewProduct from "./pages/NewProduct";
import AllProduct from "./pages/AllProduct";
import ProductDetail from "./pages/ProductDetail";
// import { useAuth } from "./hooks/useAuth";

function App() {
  // const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          sessionStorage.getItem("isAuthenticated") === "true" ? (
            <Dashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="home" element={<HomePage />} />
      <Route path="cars" element={<AllProduct />} />
      <Route path="add-car" element={<NewProduct />} />
      <Route path="view-car/:id" element={<ProductDetail />} />
      <Route path="edit-car/:id" element={<NewProduct />} />
    </Routes>
  );
}

export default App;
