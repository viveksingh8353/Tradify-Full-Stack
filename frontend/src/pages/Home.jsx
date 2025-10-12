import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaBrain, FaBriefcase, FaClipboardList, FaFire, FaLaptopCode } from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine className="text-green-500 text-3xl" />,
    title: "Live Data for 2000+ Stocks",
    desc: "Stay ahead with real-time stock prices and updates."
  },
  {
    icon: <FaBrain className="text-green-500 text-3xl" />,
    title: "Advanced Charting",
    desc: "Analyze market trends with dynamic and interactive charts."
  },
  {
    icon: <FaBriefcase className="text-green-500 text-3xl" />,
    title: "Paper Trading Portfolio",
    desc: "Build your virtual portfolio and track your trades easily."
  },
  {
    icon: <FaClipboardList className="text-green-500 text-3xl" />,
    title: "Customizable Watchlist",
    desc: "Keep an eye on your favorite stocks in one place."
  },
  {
    icon: <FaFire className="text-green-500 text-3xl" />,
    title: "Live Top Movers",
    desc: "Discover trending stocks making the biggest moves daily."
  },
  {
    icon: <FaLaptopCode className="text-green-500 text-3xl" />,
    title: "All Open Source",
    desc: "Transparent, community-driven, built for traders by traders."
  },
];

const experience = [
  {
    title: "Intuitive Dashboard",
    desc: "Get a clean, modern, and interactive dashboard that simplifies stock tracking and trading. Visualize your trades and market movement at a glance.",
    imageAlt: "Dashboard UI illustration"
  },
  {
    title: "Detailed Portfolio Analysis",
    desc: "Dive deep into your performance with insightful metrics and smart analytics to optimize your trading strategy.",
    imageAlt: "Analytics/graph illustration"
  }
];

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto px-6 lg:px-20 text-center lg:text-left">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🚀 Master the Market with Paper Trading
          </motion.h1>
          <motion.p
            className="mt-6 text-lg max-w-3xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Step into the world of trading — risk-free and full of learning. Tradify lets you practice real stock trading using live market data without spending a rupee. Whether you're a beginner learning the ropes or a pro testing strategies, experience the thrill of trading with no risk attached. Refine your skills, track your performance, and grow your confidence — before stepping into the real market.
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="/register"
              className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold shadow-md transition"
            >
              Start Trading Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold mb-12">⚡ Powerful Features at Your Fingertips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-center mb-12">🌍 Experience the Power of Tradify</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * idx, duration: 0.6 }}
              >
                <h3 className="font-semibold text-2xl mb-4">{exp.title}</h3>
                <p className="text-gray-700 mb-4">{exp.desc}</p>
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 rounded">
                  {exp.imageAlt}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-green-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">🚀 Ready to Start Your Trading Journey?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join thousands of aspiring traders and start your journey toward market mastery today — risk-free, smart, and powerful.
        </p>
        <div className="flex justify-center gap-6">
          <a href="/register" className="px-6 py-3 rounded-full bg-white text-green-500 font-semibold shadow-md hover:bg-gray-100 transition">
            Create Your Free Account 
          </a>
         
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>Tradify © 2025</p>
        <p>Empowering traders through technology and learning.</p>
        <p>📍 Built with ❤️ for the trading community.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
