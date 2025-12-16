import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, adminOnly = false }) {
  
  const token = localStorage.getItem("accessToken");
  
  if (!token) {
    return <Navigate to="/login" />;
  }

  if (adminOnly) {
    try {
     
      const user = JSON.parse(atob(token.split(".")[1]));
      if (user.role !== "admin") {
        return <Navigate to="/dashboard" />;
      }
    } catch (e) {
     
      return <Navigate to="/login" />;
    }
  }

  return children;
}