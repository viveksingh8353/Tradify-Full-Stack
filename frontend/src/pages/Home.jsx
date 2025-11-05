import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaBrain, FaBriefcase, FaClipboardList, FaFire, FaLaptopCode } from "react-icons/fa";

import dashboardimg from "../assets/Dashboard.jpg";
import stockimg from "../assets/StockPage.jpg"

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
    image: dashboardimg,
    imageAlt: "Dashboard UI illustration"
  },
  {
    title: "Detailed Portfolio Analysis",
    desc: "Dive deep into your performance with insightful metrics and smart analytics to optimize your trading strategy.",
    image: stockimg,
    imageAlt: "Analytics/graph illustration"
  }
];


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 2 }}
    >
      <div className="bg-gray-50 text-gray-900 ">
        {/* Hero Section */}
        <section className="min-h-[380px] flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
          <div className="w-full max-w-5xl mx-auto text-center pt-10 px-4">
            <motion.h1
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-green-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Master the Market with Paper Trading
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-700 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Experience real-time market dynamics without the risk. Tradify<br />
              brings you a comprehensive paper trading platform to hone your skills.
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="/register"
                className="px-8 py-4 rounded bg-green-600 hover:bg-green-700 text-white text-lg font-semibold shadow transition"
              >
                Start Trading Now
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="w-full max-w-6xl mx-auto text-center pt-10 px-4">
            <h2
              className="text-4xl font-extrabold mb-12 text-green-700"
            // style={{ color: "#119980" }} // Screenshot waale green tone ke liye
            >
              Powerful Features at Your Fingertips
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3
                    className="font-bold text-2xl mb-2 text-green-700"
                  // style={{ color: "#109578" }} // Heading green
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-base">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Experience Section */}
        <section className="py-20 bg-gray-100">
          <div className="w-full max-w-6xl mx-auto text-center pt-10 px-4">
            <h2
              className="text-4xl font-extrabold text-center mb-12 text-green-700"
            // style={{ color: "#119980" }}
            >
              Experience the Power of Tradify
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * idx, duration: 0.6 }}
                >
                  <h3
                    className="font-bold text-2xl mb-2 text-green-700"
                  // style={{ color: "#109578" }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">{exp.desc}</p>
                  {/* Card image yaha show karo */}
                  {exp.image && (
                    <img
                      src={exp.image}
                      alt={exp.imageAlt}
                      className="w-full rounded-xl border object-cover shadow"
                      style={{ background: "#f7f8f9" }}
                    />
                  )}

                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-white text-center">
          <h2
            className="text-4xl font-extrabold mb-6 text-green-700"
          // style={{ color: "#119980" }}
          >
            Ready to Start Your Trading Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700 text-lg">
            Join traders who are honing their skills with Tradify. Sign up today<br />
            and take your first step towards mastering the market.
          </p>
          <div className="flex justify-center">
            <a
              href="/register"
              className="px-8 py-4 rounded bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition text-lg"
            >
              Create Your Free Account
            </a>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-green-900 text-gray-300 text-center py-8">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold tracking-wide">Tradify © 2025</h2>
            <p className="text-sm">Code. Trade. Grow.</p>
            <p className="text-sm">
              🚀 Crafted by <span className="font-medium text-green-400">Vivek Singh</span> with ❤️ for traders worldwide.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="https://x.com/vivek5ingh" className="hover:text-green-400 transition-colors">Twitter</a>
            <a href="https://github.com/viveksingh8353" className="hover:text-green-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/vivek5ingh/https://www.linkedin.com/in/vivek5ingh/" className="hover:text-green-400 transition-colors">LinkedIn</a>

          </div>
        </footer>    </div>
    </motion.div>
  );
};

export default Home;
