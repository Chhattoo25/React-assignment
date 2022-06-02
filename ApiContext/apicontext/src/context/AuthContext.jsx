import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const login = (username, password) => {
    if (username && password) {
      setIsAuth(true);
    }
  };

  const logout = () => {
    // call api to get inform session is over
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}