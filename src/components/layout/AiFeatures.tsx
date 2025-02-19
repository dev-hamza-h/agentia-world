"use client";

import { motion } from "framer-motion";
import { FaCloud, FaShieldAlt, FaRocket, FaCode } from "react-icons/fa";

const items = [
  {
    title: "Cloud AI",
    description: "AI-powered solutions with seamless cloud integration",
    icon: <FaCloud />,
  },
  {
    title: "Security & Privacy",
    description: "Advanced security protocols to protect your data",
    icon: <FaShieldAlt />,
  },
  {
    title: "Performance Boost",
    description: "Optimized AI for faster and smarter processing",
    icon: <FaRocket />,
  },
  {
    title: "Smart Automation",
    description: "Intelligent automation to enhance efficiency",
    icon: <FaCode />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="max-w-screen-2xl mx-auto bg-purple-900 text-white py-20 px-4"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl py-2 font-bold bg-gradient-to-t from-fuchsia-500 to-blue-500 text-transparent bg-clip-text">
          AI-Powered Future
        </h2>
        <p className="text-white mt-2 text-lg sm:text-xl">
          Transforming industries with next-gen intelligence
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-fuchsia-800 p-6 rounded-xl shadow-md text-center"
          >
            <div className="text-4xl text-blue-400 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-3">
              {item.title}
            </h3>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

