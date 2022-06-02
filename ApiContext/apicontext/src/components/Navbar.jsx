import React from "react";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import Wishlist from "./Wishlist";
// import Toggle from "./Toggle";

const Navbar = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  const { buy} = useContext(AuthContext);
  const{isLight,toggleTheme}=useContext(ThemeContext)
  return (
    <div>

 <button
 onClick={()=>{if(isAuth) logout();else login("R","Z")}}
 >{isAuth?"Logout":"Login"}</button>
  <button
 onClick={buy}
 >Buy</button>
   <button
 onClick={toggleTheme}
 >{`Make ${isLight?"Dark":"Light"}`}</button>
 {isAuth&&<Wishlist></Wishlist>}
 {/* <Toggle></Toggle> */}

    </div>
  );
};

export default Navbar;
