// src/components/Navbar.tsx
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import logo from "../assets/images/nav-logo.png";
import { HiSearch, HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // ✅ Only apply hide-on-scroll for screens >= 768px (desktop/laptop)
      if (window.innerWidth >= 768) {
        const currentScrollY = window.scrollY;
        setNavbarVisible(currentScrollY <= lastScrollY);
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 backdrop-blur-lg shadow-2xl py-4 transition-all duration-300 border-b-2 border-blue-300 dark:border-purple-600 transform ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="AUA Logo" className="h-14 w-auto" />
          <span className="text-lg sm:text-2xl font-extrabold text-black dark:text-white tracking-wide hover:text-blue-500 dark:hover:text-purple-300 transition-colors duration-200 font-['Poppins']">
            AUA TECHNOLOGIES
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            About
          </Link>

          <Link to="/services" className="uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            Services
          </Link>

          <Link to="/technologies" className="uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            Technologies
          </Link>

          <Link to="/portfolio" className="uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            Portfolio
          </Link>
          <Link to="/blogs" className="uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            Blogs
          </Link>
          <Link to="/contact" className="uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 whitespace-nowrap">
            Contact Us
          </Link>

          <button onClick={() => setSearchOpen(true)} className="text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            <HiSearch className="h-5 w-5" />
          </button>

          {/* Theme toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" checked={isDark} onChange={toggleTheme} />
            <div className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div
              className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white dark:bg-gray-300 rounded-full transition-transform ${
                isDark ? "translate-x-5" : ""
              }`}
            ></div>
          </label>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-black dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg p-4 space-y-3">
          <Link to="/about" className="block uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            About
          </Link>
          <Link to="/services" className="block uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            Services
          </Link>
          <Link to="/technologies" className="block uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            Technologies
          </Link>
          <Link to="/portfolio" className="block uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            Portfolio
          </Link>
          <Link to="/blogs" className="block uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            Blogs
          </Link>
          <Link to="/contact" className="block uppercase text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400">
            Contact Us
          </Link>
          <button onClick={() => setSearchOpen(true)} className="block uppercase text-sm font-medium text-black dark:text-white">
            Search
          </button>

          {/* Theme toggle */}
          <label className="flex items-center space-x-2 text-sm text-black dark:text-white">
            <span>Theme</span>
            <input type="checkbox" className="sr-only" checked={isDark} onChange={toggleTheme} />
            <div className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded-full relative">
              <div
                className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white dark:bg-gray-300 rounded-full transition-transform ${
                  isDark ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
      )}

      {/* Search Bar */}
      {searchOpen && (
        <div className="fixed left-0 right-0 top-[80px] bg-white dark:bg-gray-800 shadow-2xl p-4 z-50 max-w-lg mx-auto rounded-b-lg">
          <button onClick={() => setSearchOpen(false)} className="absolute top-2 right-2 text-gray-500 dark:text-gray-300">
            ×
          </button>
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
            <input
              type="text"
              placeholder="Enter your query..."
              className="w-full p-2 focus:outline-none text-black dark:text-white bg-transparent"
            />
            <button className="px-3 text-blue-600 dark:text-blue-400">
              <HiSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
