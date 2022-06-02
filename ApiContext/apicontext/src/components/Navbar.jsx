import React from "react";
import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import Wishlist from "./Wishlist";
import Toggle from "./Toggle";
import styles from "./Navbar.module.css"

const Navbar = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  const { buy } = useContext(AuthContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.nav}>
      Navbar:
      <button   className={styles.btn} 
        onClick={() => {
          if (isAuth) logout();
          else login("R", "Z");
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>


      <Button className={styles.btn} onClick={buy}>Buy</Button>

      <Button  className={styles.btn}  onClick={toggleTheme}>{`Make ${
        isLight ? "Dark" : "Light"
      }`}</Button>


      <Toggle toggleTheme={toggleTheme}></Toggle>
     <Wishlist></Wishlist>
    </div>
  );
};

export default Navbar;
