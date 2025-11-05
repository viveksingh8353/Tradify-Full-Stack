import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/tredify_logo.png";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="w-full bg-white shadow-sm py-3">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => navigate(isLoggedIn ? "/dashboard" : "/")}
        >
          <img src={logo} alt="logo" className="w-32 h-auto" />
        </div>

        {/* Search */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white w-[300px]">
            <input
              type="text"
              placeholder="Search for stocks..."
              className="px-4 py-1.5 w-full text-gray-700 focus:outline-none"
            />
            <span className="px-3">
              <svg width="20" height="20" fill="none" stroke="#7b8c99" strokeWidth="1.9" viewBox="0 0 24 24">
                <circle cx='11' cy='11' r='8' />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>

        {/* Right Section */}
        {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-10 h-8 flex justify-center items-center border border-gray-300 rounded-md hover:border-teal-600 transition"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M7 14l5-5 5 5" stroke="#229379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden text-sm">
                
                <button onClick={() => navigate("/portfolio")} className="w-full px-5 py-3 text-left hover:bg-gray-50">
                  Portfolio
                </button>
                <button onClick={() => navigate("/watchlist")} className="w-full px-5 py-3 text-left hover:bg-gray-50">
                  Watchlist
                </button>
                <button onClick={() => navigate("/topmovers")} className="w-full px-5 py-3 text-left hover:bg-gray-50">
                  Top Movers
                </button>

                <div className="h-px bg-gray-200" />

                <button onClick={handleLogout} className="w-full px-5 py-3 text-left text-red-600 hover:bg-red-50">
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/register"
            className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2 rounded-md transition shadow-sm"
          >
            Login / Register
          </Link>
        )}
      </div>
    </nav>
  );
}
