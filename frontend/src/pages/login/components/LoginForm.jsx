
import React, { useState } from 'react';
import api from "../../../services/api";

export default function LoginForm({ onSuccess, setIsLoggedIn }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

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
      onSuccess(); 
    } catch (error) {
      setMessage(error.response?.data?.detail || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block mb-1 font-semibold text-green-700">Username</label>
        <input
          className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-green-700">Password</label>
        <input
          className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          name="password"
          type="password"
          placeholder="Your password goes here..."
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-center">
        <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded shadow transition">
          Login
        </button>
      </div>
      {message && (
        <p className="mt-6 text-center font-medium text-red-600">{message}</p>
      )}
    </form>
  );
}
