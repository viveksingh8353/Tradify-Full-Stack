// src/pages/Register/components/RegisterForm.jsx
import React, { useState } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";

export default function RegisterForm({ onSuccess }) {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/register", formData);
      setMessage("");
      onSuccess(`User ${res.data.username} registered successfully.`);
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.detail || "Error registering user");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <label className="block mb-1 font-semibold text-green-700">Username</label>
        <input
          className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          name="username"
          placeholder="Choose a username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-green-700">Email</label>
        <input
          className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          name="email"
          type="email"
          placeholder="Enter your e-mail"
          value={formData.email}
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
          placeholder="Your password goes here.."
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-center">
        <button
          type="submit"
          className="bg-green-700 hover:bg-teal-800 text-white font-semibold px-7 py-2 rounded shadow transition"
        >
          Register
        </button>
      </div>
      {message && (
        <p className="mt-6 text-center font-medium text-teal-700">{message}</p>
      )}
      <div className="text-center text-gray-700 mt-8 text-base">
        Already have an account?{" "}
        <Link to="/login" className="text-green-700 font-semibold hover:underline">
          Login
        </Link>
      </div>
    </form>
  );
}
