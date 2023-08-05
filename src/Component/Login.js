import React, { useState } from "react";
import "./Login.css";

const Login = ({ handlePageChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logged in with email:", email, "and password:", password);
  };

  return (
    <div className="body">
      <h2 className="login">Login</h2>
      <div>
        <label className="mail">Email:</label>
        <input
          type="text"
          className="move"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="maill">Password:</label>
        <input
          type="password"
          className="mailll"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="logg" onClick={handleLogin}>
        Login
      </button>
      <button className="form-button" onClick={() => handlePageChange("register")}>
        Register
      </button>
    </div>
  );
};

export default Login;

