// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/nav-logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
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
      className={`sticky top-0 z-50   py-4 transition-transform duration-300 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="AUA Logo" className="h-20 w-auto transition-transform duration-300 ease-in-out hover:scale-125 " />
          <span className="text-3xl font-extrabold text-blue-900 tracking-wide font-['Poppins'] transition-transform duration-300 ease-in-out hover:scale-110">
            AUA  <span className="text-orange-600 hove: none">TECHNOLOGIES </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: "About", to: "/about" },
            { name: "Services", to: "/services" },
            { name: "Technologies", to: "/technologies" },
            { name: "Portfolio", to: "/portfolio" },
            { name: "Blogs", to: "/blogs" },
          ].map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="relative uppercase text-md font-bold text-blue-900 hover:text-orange-600 transition-colors duration-200 group"
            >
              {link.name}
              
            </Link>
          ))}

          {/* Contact Us Button */}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-md text-md font-bold uppercase bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex  items-center text-blue-900 dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg p-4 space-y-4">
          {[
            { name: "About", to: "/about" },
            { name: "Services", to: "/services" },
            { name: "Technologies", to: "/technologies" },
            { name: "Portfolio", to: "/portfolio" },
            { name: "Blogs", to: "/blogs" },
          ].map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="block uppercase text-sm font-medium text-blue-900  hover:text-blue-600  transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          {/* Contact Us Button */}
          <Link
            to="/contact"
            className="block w-full text-center px-5 py-3 rounded-md text-sm font-semibold uppercase bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
