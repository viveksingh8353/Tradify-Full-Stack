import React, { useState, useContext } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/login", new URLSearchParams(formData));
      localStorage.setItem("token", res.data.access_token);
      setIsLoggedIn(true);
      setMessage("");
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 via-white to-yellow-100">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-90 rounded-xl shadow-2xl border-l-8 border-green-600">
        <div className="flex flex-col items-center mb-7">
          {/* Icon */}
          <svg className="w-14 h-14 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="#d1fae5"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4"/>
          </svg>
          <h1 className="font-extrabold text-3xl text-green-700">Login to Tradify</h1>
          <p className="text-gray-600 text-center mt-2">
            Enter your details to access trading tools and dashboard.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Username</label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow transition"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-6 text-center font-medium text-red-600">{message}</p>}
        <div className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-700 hover:underline font-medium">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
