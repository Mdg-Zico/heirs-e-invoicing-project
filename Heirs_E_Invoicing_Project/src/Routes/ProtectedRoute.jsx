import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("authToken");
  const location = useLocation();
  const shown = useRef(false);

  useEffect(() => {
    if (!token && !shown.current) {
      toast.error("Session expired. Please login again.");
      shown.current = true;
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
