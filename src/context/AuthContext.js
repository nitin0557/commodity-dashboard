// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {

    if (email === "manager@slooze.com" && password === "123456") {
      const userData = { role: "Manager", email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    } else if (email === "keeper@slooze.com" && password === "123456") {
      const userData = { role: "StoreKeeper", email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
