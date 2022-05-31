import React from "react";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import Wishlist from "./Wishlist";

const Navbar = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  return (
    <div>

      Navbar
      <button onClick={()=>{

                           if(isAuth) logout():
                           else login("R","Z")
      }} >{isAuth?"Logout":"Login"}</button>
      <Wishlist></Wishlist>

    </div>
  );
};

export default Navbar;
