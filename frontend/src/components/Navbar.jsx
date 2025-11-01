import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn, user } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // ...rest of your handler code (unchanged)...

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


 
  const avatarUrl = user?.avatar || "https://img.icons8.com/ios-filled/50/4a90e2/line-chart.png";


  return (
    <nav className="bg-white shadow flex items-center justify-between px-8 py-3"
      style={{ margin: "10px auto",
        maxWidth: 900,
        marginLeft: "auto",
        marginRight: "auto",
        background: "#fff" }}
    >
      {/* Logo */}
      <span onClick={handleLogoClick} className="flex items-center space-x-2 cursor-pointer">
        <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-yellow-400 font-mono tracking-wide">
          Tradify
        </span>
      </span>

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
          <a href="/register" className="bg-green-500 hover:bg-green-700 text-white font-medium px-5 py-2 rounded transition">
            Login/Register
          </a>
        ) : (
          <>
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="focus:outline-none">
              <img
                src={avatarUrl}
                alt="avatar"
                className="w-9 h-9 rounded-full border-2 border-teal-100 shadow object-cover"
              />
            </button>
            {showDropdown && (
  <div
    ref={dropdownRef}
    style={{
      position: "absolute",
      top: "40px",        // Button ke bilkul neeche, required if avatar button ~40px
      right: "0",         // Pura right aligned, search bar ke bhi right aligned hoga
      width: "210px",     // Thoda chhota/compact
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 8px 20px 0 #22334422",
      border: "1px solid #eef1f4",
      padding: "10px 0",
      zIndex: 40,
      fontSize: "1.13em"  // Simple readable
    }}
  >
    <button
      onClick={() => { setShowDropdown(false); navigate("/portfolio"); }}
      style={{ display: "flex", alignItems: "center", width: "100%", background: "none", border: "none", color: "#202020", padding: "12px 28px", cursor: "pointer", textAlign: "left" }}>
      Portfolio
    </button>
    <button
      onClick={() => { setShowDropdown(false); navigate("/watchlist"); }}
      style={{ display: "flex", alignItems: "center", width: "100%", background: "none", border: "none", color: "#202020", padding: "12px 28px", cursor: "pointer", textAlign: "left" }}>
      Watchlist
    </button>
    <button
      onClick={() => { setShowDropdown(false); navigate("/topmovers"); }}
      style={{ display: "flex", alignItems: "center", width: "100%", background: "none", border: "none", color: "#202020", padding: "12px 28px", cursor: "pointer", textAlign: "left" }}>
      Top Movers
    </button>
    <div style={{
      height: 1, background: "#f3f3f3", margin: "8px 0"
    }}/>
    <button 
      onClick={() => { setShowDropdown(false); handleLogout(); }}
      style={{ display: "flex", alignItems: "center", width: "100%", background: "none", border: "none", color: "#d7263d", padding: "12px 28px", cursor: "pointer", textAlign: "left" }}>
      Log Out
    </button>
  </div>
)}

          </>
        )}
      </div>
    </nav>
  );
}
