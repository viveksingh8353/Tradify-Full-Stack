import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { isLoggedIn, loading } = useContext(AuthContext);

  // Jab tak auth state load ho rahi ho, flashing redirect avoid karo
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-[60vh] text-gray-600 text-lg">
        Checking session...
      </div>
    );
  }

  // Not logged in → redirect to login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
