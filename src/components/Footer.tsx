// src/components/Footer.tsx
import { Link } from "react-router-dom";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import logo from "../assets/images/nav-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-900 text-gray-700 dark:text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="AUA Logo" className="h-12 w-auto drop-shadow-lg" />
            <span className="text-xl font-extrabold text-gray-900 dark:text-white tracking-wide">
              AUA TECHNOLOGIES
            </span>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
            Innovative solutions for your business needs. We design, build, and scale technology with excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Resources
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/blogs"
                className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Connect With Us
          </h4>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300 shadow-md"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300 shadow-md"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-500 transition-colors duration-300 shadow-md"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} AUA Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
