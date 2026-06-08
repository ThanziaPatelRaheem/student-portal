import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Welcome to Student Portal</h1>
        <p className="text-line">Manage students securely internally</p>
      </div>
    </>
  );
};

export default Home;
