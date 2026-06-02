import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function logoutHandler() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <nav>
        <Link className="home-link" to="/">
          Student Portal
        </Link>

        <div className="nav-container">
          {!token ? (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/students">
                Students
              </Link>
              <button onClick={logoutHandler}>Logout</button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
