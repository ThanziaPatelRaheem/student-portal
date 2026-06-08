import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const userRegiterData = {
        name,
        email,
        password,
      };

      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegiterData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Could not register user");
      }

      setSuccess(data.message);
      navigate("/login");
      setError(null);
      setName("");
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
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Register</button>
      </form>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Register;
