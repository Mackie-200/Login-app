import React, { useState } from "react";
import "./login.css"; // reuse same CSS

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password recovery link sent to ${email}`);
    setEmail("");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <p className="login-subtext">
          Enter your email to reset your password
        </p>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <button type="submit" className="login-btn">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

