import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const INACTIVITY_LIMIT = 15 * 60 * 1000; // 15 minutes

function InactivityHandler({ children }) {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");

    toast.warning("Session expired due to inactivity", {
      position: "bottom-right",
      autoClose: 3000,
    });

    navigate("/login", { replace: true });
  };

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(logoutUser, INACTIVITY_LIMIT);
  };

  useEffect(() => {
    const events = [
      "mousemove",
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
    ];

    events.forEach(event =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer(); // start timer on mount

    return () => {
      events.forEach(event =>
        window.removeEventListener(event, resetTimer)
      );
      clearTimeout(timerRef.current);
    };
  }, []);

  return children;
}

export default InactivityHandler;
