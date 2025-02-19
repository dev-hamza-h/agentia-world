"use client";

import { motion } from "framer-motion";
import { FaRobot, FaComments, FaCogs } from "react-icons/fa";

const items = [
  {
    title: "Autonomous AI Agents",
    description:
      "Self-learning AI agents that automate decision-making and operations",
    icon: <FaRobot />,
  },
  {
    title: "Conversational AI",
    description:
      "AI-powered chatbots and voice assistants for seamless interactions",
    icon: <FaComments />,
  },
  {
    title: "AI Process Automation",
    description:
      "AI-driven workflow automation to enhance efficiency and reduce workload",
    icon: <FaCogs />,
  },
];

export default function AiPoweredAgents() {
  return (
    <section
      id="agents"
      className="max-w-screen-2xl mx-auto bg-purple-900 text-white py-20 px-4"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl py-2 font-bold bg-gradient-to-t from-fuchsia-500 to-blue-500 text-transparent bg-clip-text">
          AI-Powered Agents
        </h2>
        <p className="text-white mt-2 text-lg sm:text-xl">
          Intelligent agents that revolutionize automation and decision-making
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="bg-fuchsia-800 p-6 rounded-xl shadow-md text-center border border-transparent hover:border-blue-400 transition-all duration-300"
          >
            <div className="text-4xl text-blue-400 flex justify-start">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-3 text-left">
              {item.title}
            </h3>
            <p className="text-gray-300 mt-2 text-sm sm:text-base text-left">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
