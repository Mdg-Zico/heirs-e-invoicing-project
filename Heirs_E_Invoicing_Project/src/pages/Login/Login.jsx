import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();   // THIS IS IMPORTANT

  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("authToken", data.access_token);
    localStorage.setItem("userEmail", email);
    setSuccess("Login Successful!")

    setTimeout(()=>{
      navigate("/dashboard");
    },1200)
    
  } catch (error) {
    alert("Login failed. Check email or password.");
  }
};



  return (
    <div className="login-container">
      <div className="login-card">
        {success && <p className="success-text">{success}</p>}
        <h2>Heirs E-Invoicing App</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-text">{error}</p>}
          
          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>
          <p className="forgot" onClick={() => navigate("/forgot-password")}>
              Forgot password?
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;
