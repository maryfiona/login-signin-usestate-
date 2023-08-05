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
    <div className="body">
      <h2 className="login">Register</h2>
      <div>
        <label className="mail">Name:</label>
        <input
          type="text"
          className="move"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="pa">Email:</label>
        <input
          type="text"
          className="movee"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="pas">Password:</label>
        <input
          type="password"
          className="moves"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label className="pass">Confirm Password:</label>
        <input
          type="password"
          className="mov"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="logg" onClick={handleRegister}>
        Register
      </button>
      <button className="reg" onClick={() => handlePageChange("login")}>
        Login
      </button>
    </div>
  );
};

export default Register;
