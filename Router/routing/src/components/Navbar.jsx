import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    if (id === 1) navigate("/products/1");
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <button onClick={() => handleOnClick(1)}>product1</button>
    </div>
  );
};

export default Navbar;
