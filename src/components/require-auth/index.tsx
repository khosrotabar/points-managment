import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const token = localStorage.getItem("Authorization");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
