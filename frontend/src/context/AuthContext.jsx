import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);

  return (
    <AuthContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
