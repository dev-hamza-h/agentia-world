"use client";

import TextEffect from "@/components/layout/TextEffect";
import { FaRobot } from "react-icons/fa";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center py-32 bg-gradient-to-r from-violet-950 to-fuchsia-900 text-white">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        {/* Tag with Blinking Dot Inside */}
        <div className="inline-flex items-center px-4 py-3 text-sm font-semibold rounded-full bg-fuchsia-800 text-fuchsia-400">
          <span className="w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse mr-2"></span>
          POWERED BY PANAVERSITY
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 sm:mt-10">
          <span className="bg-gradient-to-t from-fuchsia-500 to-blue-500 text-transparent bg-clip-text">
            Revolutionizing AI Agents
          </span>
          <br />
          <span className="bg-gradient-to-t from-fuchsia-500 to-blue-500 text-transparent bg-clip-text">
            for the Future
          </span>
        </h1>

        {/* Main Container with Bigger Background */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center w-full">
          <div className="relative flex items-center bg-slate-800 p-4 sm:p-6 rounded-2xl w-[90%] sm:w-[680px] max-w-full border-2 border-fuchsia-500">
            {/* FaRobot Icon Inside BG, Left-Aligned */}
            <div className="absolute left-4 sm:left-[5px] flex items-center justify-center p-4 text-fuchsia-400 text-[60px] sm:text-[80px] w-16 sm:w-20 h-16 sm:h-20">
              <FaRobot />
            </div>
            {/* Inner Container for Text Effect */}
            <div className="flex items-center bg-gray-700 px-3 py-3 rounded-xl w-full ml-16">
              {/* Animated Text Effect */}
              <TextEffect />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex gap-4 justify-center items-center flex-wrap">
          <button className="border bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-95">
            Deploy Your AI Agent
            <ChevronRight size={20} className="relative top-[1Fpx]" />
          </button>

          <button className="border bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-95">
            See AI in Action
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
