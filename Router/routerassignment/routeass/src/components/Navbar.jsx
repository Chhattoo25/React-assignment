import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ background:"black",padding:"20px"}}>
      Navbar
      <div style={{display:"flex",justifyContent:"space-evenly",padding:"20px"}}>
        <Link to="/" style={{ color: "green", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="products" style={{ color: "green", textDecoration: "none" }}>
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
