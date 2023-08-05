import React, { useState } from "react";
import "./Register.css";

const Register = ({ handlePageChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Implement your register logic here
    console.log("Registered with name:", name, "email:", email, "password:", password);
  };

  return (
    <div className="form-container">
      <h2 className="page-heading">Register</h2>
      <div>
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Email:</label>
        <input
          type="text"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Confirm Password:</label>
        <input
          type="password"
          className="form-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="form-button" onClick={handleRegister}>
        Register
      </button>
      <button href="/" className="form-button" onClick={() => handlePageChange("login")}>
        Login
      </button>
    </div>
  );
};

export default Register;
