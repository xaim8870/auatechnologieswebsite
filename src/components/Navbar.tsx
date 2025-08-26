// src/components/Navbar.tsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import logo from '../assets/images/nav-logo.png'; // Adjust path if needed
import { HiChevronDown } from 'react-icons/hi'; // Import from Heroicons (hi = Heroicons)
import BackgroundPatternMatrix from './BackgroundPatternMatrix'; // Import the new component

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md py-6 transition-all duration-300 overflow-hidden">
      <BackgroundPatternMatrix /> {/* Add the background pattern here */}
      <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="AUA LLC Logo" className="h-10 w-auto" />
          <span className="text-3xl font-extrabold text-gray-600 dark:text-blue-400 tracking-wide hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-['Poppins']">
            {/* Alternative font options - uncomment one to use: */}
            {/* font-['Alex_Brush'] */}
            {/* font-['Parisienne'] */}
            {/* font-['Italianno'] */}
            {/* font-['Great_Vibes'] */}
            {/* font-['Kristi'] */} {/* Calligraphic option */}
            {/*  */} {/* Programming-style font option */}
            AUA LLC
          </span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/" className="uppercase text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center font-sans">
            Home <HiChevronDown className="ml-1 h-4 w-4 opacity-70" />
          </Link>
          <Link to="/about" className="uppercase text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center font-sans">
            About <HiChevronDown className="ml-1 h-4 w-4 opacity-70" />
          </Link>
          <Link to="/services" className="uppercase text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center font-sans">
            Services <HiChevronDown className="ml-1 h-4 w-4 opacity-70" />
          </Link>
          <Link to="/contact" className="uppercase text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center font-sans">
            Contact Us <HiChevronDown className="ml-1 h-4 w-4 opacity-70" />
          </Link>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isDark}
              onChange={toggleTheme}
            />
            <div className="w-10 h-5 bg-gray-900 dark:bg-gray-100 rounded-full peer peer-checked:bg-blue-600 dark:peer-checked:bg-blue-400"></div>
            <div className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white dark:bg-gray-900 rounded-full transition-transform duration-200 ease-in-out ${isDark ? 'translate-x-5' : ''}`}></div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;