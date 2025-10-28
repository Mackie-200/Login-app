import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have logged out!");
    navigate("/"); // takes you back to Login page
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to Your Dashboard 🎉</h2>
        <p className="login-subtext">You are now logged in successfully.</p>

        <button className="login-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;


