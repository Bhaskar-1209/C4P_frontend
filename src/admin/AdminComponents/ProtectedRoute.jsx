// src/components/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token");
  const location = useLocation();
  return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;