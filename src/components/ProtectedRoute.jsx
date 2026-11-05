import { Navigate, Outlet } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
export function ProtectedRoute() {
  const { isLoggedIn } = useApp();
  return isLoggedIn ? <Outlet/> : <Navigate to="/login" replace/>;
}
