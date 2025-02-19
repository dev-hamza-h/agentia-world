"use client";

import React from "react";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center bg-purple-900 px-6 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden max-w-screen-2xl mx-auto"
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl py-2 font-bold bg-gradient-to-t from-fuchsia-500 to-blue-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="text-white mt-2 text-base sm:text-lg md:text-xl">
          Ready to transform your business with AI?
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
        {/* Left - Contact Info */}
        <motion.div
          className="text-white space-y-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-fuchsia-400">
            Contact Information
          </h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-400" />
              <span className="text-sm sm:text-base">
                contact@agentiaworld.com
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-400" />
              <span className="text-sm sm:text-base">www.agentiaworld.com</span>
            </div>
          </div>

          <div className="flex space-x-4 text-white">
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 hover:text-fuchsia-400 cursor-pointer" />
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 hover:text-fuchsia-400 cursor-pointer" />
            <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6 hover:text-fuchsia-400 cursor-pointer" />
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          className="p-2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-fuchsia-700 text-white p-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-purple-400 outline-none placeholder:text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-fuchsia-700 text-white p-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-purple-400 outline-none placeholder:text-white"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-fuchsia-700 text-white p-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-purple-400 outline-none placeholder:text-white"
            />
            <textarea
              placeholder="Your Message"
              className="w-full h-32 bg-fuchsia-700 text-white p-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-purple-400 outline-none placeholder:text-white"
            ></textarea>
            <button className="w-full border bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-95">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
