import { FaRobot, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto bg-gradient-to-r from-violet-950 to-fuchsia-900 flex justify-between items-center z-50 shadow-md shadow-fuchsia-400/20 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-lg font-bold flex items-center gap-2">
              <FaRobot className="text-fuchsia-400 text-2xl" />
              <span className="text-white">Agentia</span>{" "}
              <span className="text-fuchsia-400">World</span>
            </h2>
            <p className="mt-2 text-sm text-white">
              Next-gen AI agents driving enterprise intelligence.
            </p>
            <div className="flex gap-4 mt-4 text-lg text-white">
              <FaGithub className="hover:text-fuchsia-400 cursor-pointer transition-colors" />
              <FaLinkedin className="hover:text-fuchsia-400 cursor-pointer transition-colors" />
              <FaTwitter className="hover:text-fuchsia-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white text-sm font-semibold">Product</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                Features
              </li>
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                Pricing
              </li>
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                Documentation
              </li>
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                API
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                About
              </li>
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                Blog
              </li>
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                Careers
              </li>
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-sm font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                Privacy
              </li>
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                Terms
              </li>
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                Security
              </li>
              <li className="text-fuchsia-400 hover:text-blue-400 cursor-pointer transition-colors">
                Compliance
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-white mt-10">
          © 2025 Agentia World. Powered by Panaversity. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
