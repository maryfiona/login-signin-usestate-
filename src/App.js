import React, { useState } from "react";
import Login from "../src/Component/Login";
import Register from "../src/Component/Register";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      
      {currentPage === "login" ? (
        <Login handlePageChange={handlePageChange} />
      ) : (
        <Register handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default App;
