import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);   // 👈 NEW
  const [user, setUser] = useState(null);         // 👈 Optional (future use)

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);

      // ✅ Future-proof: yahan se /me API hit karke user details laa sakte ho
      // Example:
      // fetch("http://127.0.0.1:8000/me", { headers: { Authorization: `Bearer ${token}` } })
      //   .then(res => res.json())
      //   .then(data => setUser(data))
      //   .catch(() => setIsLoggedIn(false));

    } else {
      setIsLoggedIn(false);
    }

    setLoading(false); // ✅ Prevents flicker and blank screen
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loading, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
