import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const { login } = useContext(AuthContext);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          onChange={handleOnChange}
          name="email"
          type="email"
          placeholder="enter email"
        />
        <input
          onChange={handleOnChange}
          type="email"
          placeholder="enter email"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
