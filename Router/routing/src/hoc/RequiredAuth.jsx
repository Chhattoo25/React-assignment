import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const{pathname}=useLocation
  const location = useLocation()
  console.log(location,location.pathname)
  if (isAuth) {
    return children;
  } else {
 return <Navigate to='/login'
 state={{from:pathname}}
 replace
 />
  }
};
export{RequiredAuth}
