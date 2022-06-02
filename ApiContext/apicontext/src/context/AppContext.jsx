import React,{createContext} from "react";

import { useState } from "react";

export const Appcontext = createContext();

 const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("abcd");
const login =(username)=>{
  
    setIsAuth(true);
    setToken(Date.now()+username)

};

const logout = () => {
  // call api to get inform session is over
  setIsAuth(false);
};

const value = {isAuth,token,login,logout}
return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
}

export {AppProvider}