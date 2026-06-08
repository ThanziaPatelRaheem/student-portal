import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };

      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login Failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/students");
      setSuccess(data.message);
      setError(null);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);

      setError(error.message);
      setSuccess("");
    }
  }
  return (
    <>
      <form onSubmit={submitHandler} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Login;
