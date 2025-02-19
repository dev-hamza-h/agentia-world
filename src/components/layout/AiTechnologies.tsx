"use client";

import { motion } from "framer-motion";
import { FaBrain, FaCloud, FaLock, FaDatabase } from "react-icons/fa";

const technologies = [
  {
    title: "Machine Learning",
    description: "Advanced ML models for predictive analytics & automation",
    icon: <FaBrain />,
  },
  {
    title: "Cloud Computing",
    description: "AI-powered solutions with secure cloud infrastructure",
    icon: <FaCloud />,
  },
  {
    title: "Cybersecurity AI",
    description: "AI-driven security for threat detection & data protection",
    icon: <FaLock />,
  },
  {
    title: "Big Data & AI Analytics",
    description: "Harnessing AI to analyze vast datasets & gain insights",
    icon: <FaDatabase />,
  },
];

export default function AiTechnologies() {
  return (
    <section
      id="technology"
      className="max-w-screen-2xl mx-auto bg-purple-900 text-white py-20 px-4"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl py-2 font-bold bg-gradient-to-t from-fuchsia-500 to-blue-500 text-transparent bg-clip-text">
          AI-Powered Technologies
        </h2>
        <p className="text-white mt-2 text-lg sm:text-xl">
          Driving innovation with cutting-edge AI solutions
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-fuchsia-800 p-6 rounded-xl shadow-md text-center"
          >
            <div className="text-4xl text-blue-400 flex justify-center">
              {tech.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-3">
              {tech.title}
            </h3>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              {tech.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
