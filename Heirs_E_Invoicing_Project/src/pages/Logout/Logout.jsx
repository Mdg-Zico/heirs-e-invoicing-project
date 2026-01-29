import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/login", { replace: true });
  }, [navigate]);

  return null;
}

export default Logout;
