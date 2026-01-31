import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear auth
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");

    // Show toast
    toast.success("Logged out successfully");

    // Redirect after short delay
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 800);
  }, [navigate]);

  return null;
}

export default Logout;
