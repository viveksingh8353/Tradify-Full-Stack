// src/pages/Register/RegisterPage.jsx
import React, { useState } from "react";
import { motion } from 'framer-motion';
import RegisterForm from "./components/RegisterForm";
import SuccessToast from "./components/SuccessToast";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const navigate = useNavigate();


  const handleSuccess = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate('/login');
    }, 3000);
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.2 }} transition={{ duration: 2 }}>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex w-full max-w-4xl rounded-xl shadow-lg border border-teal-700 overflow-hidden">
          {/* Left Panel */}
          <div className="bg-green-700 text-white flex-1 py-14 px-12 flex flex-col justify-center items-start">
            <h1 className="text-4xl font-extrabold mb-5">Register</h1>
            <hr className="border-t border-white mb-8 w-full" />
            <p className="text-lg">
              Get access to real-time data and graphical analysis for
              <span className="text-teal-200 font-semibold"> 2000+ stocks.</span>
            </p>
          </div>
         
          <div className="bg-white flex-1 py-14 px-12 flex flex-col justify-center">
            <RegisterForm onSuccess={handleSuccess} />
          </div>
        </div>
        <SuccessToast show={showToast} message={toastMsg} onClose={() => setShowToast(false)} duration={3000} />
      </div>
    </motion.div>
  );
}
