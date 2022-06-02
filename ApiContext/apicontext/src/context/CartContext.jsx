import React, { createContext, useContext } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  };
  const buy = () => {
    if (isAuth) {
      console.log("can buy");
    } else {
      console.log("cannot buy without loggin");
    }
  };
// const value = {count,addToCart,buy}
  return (<>
    <CartContext.Provider value={ {count,addToCart,buy}}>
      {children}
    </CartContext.Provider>
    </>
  );
};
