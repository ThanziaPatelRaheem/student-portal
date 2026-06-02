import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const userRegiterData = {
        name,
        email,
        password,
      };
      const res = await fetch(`http://localhost:3000/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegiterData),
      });

      if (!res.ok) {
        throw new Error(data.message || "Could not register user");
      }

      const data = await res.json();

      setSuccess(data.message);
      navigate("/login");
      setError(null);
      setName("");
      setEmail("");
      setPassword("");

      console.log(data);
    } catch (error) {
      console.log(error);
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
