
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";
import LoginForm from "./components/LoginForm";
import Toast from "./components/SuccessToast"; 
export default function LoginPage() {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState("success"); 
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  
  const handleSuccess = () => {
    setToastMsg("Logged in successfully");
    setToastType("success");
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate("/dashboard");
    }, 3000);
  };

  
  const handleError = (errMsg) => {
    setToastMsg(errMsg || "Invalid credentials");
    setToastType("error");
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.2 }} transition={{ duration: 2 }}>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex w-full max-w-4xl rounded-xl shadow-lg border border-green-700 overflow-hidden">
          {/* Left Panel */}
          <div className="bg-green-700 text-white flex-1 py-14 px-12 flex flex-col justify-center items-start">
            <h1 className="text-4xl font-extrabold mb-5">Login</h1>
            <hr className="border-t border-white mb-8 w-full" />
            <p className="text-lg">
              Get access to real-time data and graphical analysis for
              <span className="text-teal-200 font-semibold"> 2000+ stocks.</span>
            </p>
          </div>
          
          <div className="bg-white flex-1 py-14 px-12 flex flex-col justify-center">
            <LoginForm onSuccess={handleSuccess} onError={handleError} setIsLoggedIn={setIsLoggedIn} />
          </div>
        </div>
        <Toast
          show={showToast}
          message={toastMsg}
          onClose={() => setShowToast(false)}
          duration={3000}
          type={toastType}
        />
      </div>
    </motion.div>
  );
}
