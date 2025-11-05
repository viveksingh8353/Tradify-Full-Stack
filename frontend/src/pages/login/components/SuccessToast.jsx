// src/pages/Login/components/Toast.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { MdCheckCircle, MdClose, MdError } from 'react-icons/md';
import { useEffect } from 'react';

const Toast = ({ show, message, onClose, duration = 3000, type = "success" }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  // icon & color based on type
  const iconProps = type === "success"
    ? { Icon: MdCheckCircle, color: "#23C76A", bar: "#23C76A" }
    : { Icon: MdError, color: "#EF4444", bar: "#EF4444" }; // Red error color

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed',
            top: '60px',
            right: '20px',
            minWidth: '310px',
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            zIndex: 1000,
            overflow: 'hidden',
            border: `1.5px solid ${iconProps.bar}`,
          }}
        >
          <iconProps.Icon size={28} color={iconProps.color} style={{ marginRight: 12 }} />
          <span style={{
            flex: 1,
            fontSize: '18px',
            color: type === "success" ? "#757575" : "#EF4444", // Red text for error
          }}>{message}</span>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginLeft: 12,
            }}
          >
            <MdClose size={20} color="#aaa" />
          </button>
          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: 0 }}
            transition={{ duration: duration / 1000, ease: 'linear' }}
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              height: '6px',
              background: iconProps.bar,
              borderRadius: '0 0 8px 8px',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
