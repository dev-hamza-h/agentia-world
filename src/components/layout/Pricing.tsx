"use client";

import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "month",
    features: [
      "2 AI Agent Instances",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Analytics",
      "Basic Integration Support",
    ],
  },
  {
    name: "Professional",
    price: "$999",
    description: "month",
    features: [
      "10 AI Agent Instances",
      "Advanced Neural Networks",
      "Priority Support",
      "Real-time Analytics",
      "Custom Integration",
      "API Access",
      "Advanced Security",
    ],
  },
  {
    name: "Enterprise",
    price: "$Custom",
    description: "",
    features: [
      "Unlimited Agents",
      "Full Neural Suite",
      "Dedicated Support Team",
      "Advanced Analytics Dashboard",
      "Custom Development",
      "Full API Access",
      "Enterprise Security",
      "Custom Training",
    ],
  },
];

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col items-center bg-purple-900 px-4 py-20 text-white max-w-screen-2xl mx-auto"
    >
      {/* Heading & Paragraph */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl py-2 font-bold bg-gradient-to-t from-fuchsia-500 to-blue-500 text-transparent bg-clip-text">
          Choose Your Plan
        </h2>
        <p className="text-white mt-2 text-lg sm:text-xl">
          Scale your AI capabilities with our flexible pricing
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8  max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
            className={`flex flex-col justify-between rounded-xl text-white p-6 shadow-lg border border-zinc-800 min-h-[400px] h-full 
              ${
                index === 1
                  ? "border-2 !border-blue-400 bg-fuchsia-800"
                  : "bg-zinc-900"
              } max-w-[1020px] `}
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-4xl font-bold mt-2">{plan.price}</p>
              <p className="text-sm text-blue-400">{plan.description}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-fuchsia-300">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-4 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white py-2 rounded-xl w-full transform transition-all duration-300 hover:scale-95">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
