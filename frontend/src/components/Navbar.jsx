import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow flex items-center justify-between px-8 py-3">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        {/* Stylish logo text */}
        <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-yellow-400 font-mono tracking-wide">Tradify</span>
      </Link>

      {/* Center: Search bar */}
      <div className="flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search for stocks"
          className="w-full max-w-xs rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700 text-gray-700"
        />
      </div>

      {/* Right side */}
      <div className="relative flex items-center">
        {!isLoggedIn ? (
          <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-medium px-5 py-2 rounded transition">
            Login/Register
          </Link>
        ) : (
          <>
            {/* Profile Icon */}
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="focus:outline-none"
            >
              {/* Example profile icon (you can replace with user avatar later) */}
              <svg
                className="w-8 h-8 text-teal-700 hover:text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="4" strokeWidth="2"/>
                <path d="M4 20c1.33-4 14.67-4 16 0" strokeWidth="2"/>
              </svg>
            </button>
            {/* Dropdown */}
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-20 w-40 bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 z-10"
              >
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-teal-700"
                  onClick={() => setShowDropdown(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/portfolio"
                  className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-teal-700"
                  onClick={() => setShowDropdown(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/watchlist"
                  className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-teal-700"
                  onClick={() => setShowDropdown(false)}
                >
                  Watchlist
                </Link>
                <Link
                  to="/topmovers"
                  className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-teal-700"
                  onClick={() => setShowDropdown(false)}
                >
                  Top Movers
                </Link>
                <button
                  className="w-full text-left block px-4 py-2 text-red-600 hover:bg-gray-100 hover:text-yellow-400"
                  onClick={() => {
                    setShowDropdown(false);
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
