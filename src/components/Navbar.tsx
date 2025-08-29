// src/components/Navbar.tsx
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import logo from '../assets/images/nav-logo.png'; // Adjust path if needed
import { HiChevronDown, HiSearch, HiMenu, HiX } from 'react-icons/hi'; // Added menu icons for mobile
import { FaCode, FaRobot, FaCogs, FaBrain, FaLaptopCode } from 'react-icons/fa'; // Reuse icons

// New Dropdown Component for Services
const ServicesDropdown = ({ isOpen }: { isOpen: boolean }) => (
  <div className={`absolute left-0 mt-2 w-full md:w-[600px] bg-white dark:bg-gradient-to-br dark:from-blue-800 dark:to-indigo-800 shadow-2xl rounded-xl overflow-hidden transition-all duration-500 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'} z-50 p-4`}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2"> {/* Reduced gap */}
      <div className="flex items-start space-x-3 bg-blue-700/70 dark:bg-blue-900/90 p-3 rounded-md hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors duration-200">
        <FaCode className="text-white text-3xl flex-shrink-0 animate-pulse" />
        <div>
          <h4 className="font-bold text-white text-lg">Web Development</h4>
          <p className="text-sm text-gray-100">Crafting responsive apps with React, Vue, Angular, and robust backends.</p>
        </div>
      </div>
      <div className="flex items-start space-x-3 bg-blue-700/70 dark:bg-blue-900/90 p-3 rounded-md hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors duration-200">
        <FaRobot className="text-white text-3xl flex-shrink-0 animate-pulse" />
        <div>
          <h4 className="font-bold text-white text-lg">AI</h4>
          <p className="text-sm text-gray-100">Automate and innovate with custom AI models for your industry.</p>
        </div>
      </div>
      <div className="flex items-start space-x-3 bg-blue-700/70 dark:bg-blue-900/90 p-3 rounded-md hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors duration-200">
        <FaCogs className="text-white text-3xl flex-shrink-0 animate-pulse" />
        <div>
          <h4 className="font-bold text-white text-lg">DevOps</h4>
          <p className="text-sm text-gray-100">CI/CD pipelines, cloud management, and automated testing for scalability.</p>
        </div>
      </div>
      <div className="flex items-start space-x-3 bg-blue-700/70 dark:bg-blue-900/90 p-3 rounded-md hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors duration-200">
        <FaBrain className="text-white text-3xl flex-shrink-0 animate-pulse" />
        <div>
          <h4 className="font-bold text-white text-lg">Model Training</h4>
          <p className="text-sm text-gray-100">Fine-tune ML models with TensorFlow and PyTorch for peak performance.</p>
        </div>
      </div>
      <div className="flex items-start space-x-3 bg-blue-700/70 dark:bg-blue-900/90 p-3 rounded-md hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors duration-200">
        <FaLaptopCode className="text-white text-3xl flex-shrink-0 animate-pulse" />
        <div>
          <h4 className="font-bold text-white text-lg">Software Development</h4>
          <p className="text-sm text-gray-100">End-to-end solutions with secure, scalable architectures.</p>
        </div>
      </div>
    </div>
  </div>
);

// New Dropdown Component for Technologies
const TechnologiesDropdown = ({ isOpen }: { isOpen: boolean }) => (
  <div className={`absolute left-0 mt-2 w-full md:w-[600px] bg-white dark:bg-gradient-to-br dark:from-purple-800 dark:to-blue-800 shadow-2xl rounded-xl overflow-hidden transition-all duration-500 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'} z-50 p-4`}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2"> {/* Reduced gap */}
      <div className="flex items-center space-x-3 bg-purple-700/70 dark:bg-purple-900/90 p-3 rounded-md hover:bg-purple-500 dark:hover:bg-purple-700 transition-colors duration-200">
        <FaCode className="text-white text-3xl animate-spin-slow" />
        <div>
          <h4 className="font-bold text-white text-lg">Frontend Stacks</h4>
          <p className="text-sm text-gray-100">React, Vue.js, Angular, Tailwind CSS, TypeScript</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 bg-purple-700/70 dark:bg-purple-900/90 p-3 rounded-md hover:bg-purple-500 dark:hover:bg-purple-700 transition-colors duration-200">
        <FaLaptopCode className="text-white text-3xl animate-spin-slow" />
        <div>
          <h4 className="font-bold text-white text-lg">Backend Stacks</h4>
          <p className="text-sm text-gray-100">Node.js, Django, Flask, Express, Spring Boot</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 bg-purple-700/70 dark:bg-purple-900/90 p-3 rounded-md hover:bg-purple-500 dark:hover:bg-purple-700 transition-colors duration-200">
        <FaBrain className="text-white text-3xl animate-spin-slow" />
        <div>
          <h4 className="font-bold text-white text-lg">AI/ML Tools</h4>
          <p className="text-sm text-gray-100">TensorFlow, PyTorch, Scikit-learn, Hugging Face, OpenAI APIs</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 bg-purple-700/70 dark:bg-purple-900/90 p-3 rounded-md hover:bg-purple-500 dark:hover:bg-purple-700 transition-colors duration-200">
        <FaCogs className="text-white text-3xl animate-spin-slow" />
        <div>
          <h4 className="font-bold text-white text-lg">DevOps & Cloud</h4>
          <p className="text-sm text-gray-100">AWS, Azure, GCP, Docker, Kubernetes, Jenkins</p>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setNavbarVisible(false); // Hide on scroll down
      } else {
        setNavbarVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`sticky top-0 z-50 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 backdrop-blur-lg shadow-2xl py-4 transition-all duration-300 border-b-2 border-blue-300 dark:border-purple-600 transform ${navbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-11 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="AUA Technologies Logo" className="h-20 w-auto filter drop-shadow-lg hover:animate-bounce transition-transform duration-500 " />
          <span className="text-2xl font-extrabold text-black dark:text-white tracking-wide hover:text-blue-500 dark:hover:text-purple-300 transition-colors duration-200 font-['Poppins'] animate-gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] ">
            AUA TECHNOLOGIES
          </span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 ml-0 p-8">
         {/* Added pl-8 to shift menu items right */}
          <Link to="/about" className="uppercase text-base pl-20 font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center font-sans group relative">
            About
            
          </Link>
          {/* Services */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center font-sans"
            >
              Services
              <HiChevronDown
                className={`ml-1 h-4 w-4 text-black dark:text-white transition-transform duration-300 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              />
            </Link>
            <ServicesDropdown isOpen={servicesOpen} />
          </div>

          {/* Technologies */}
          <div
            className="relative group"
            onMouseEnter={() => setTechnologiesOpen(true)}
            onMouseLeave={() => setTechnologiesOpen(false)}
          >
            <Link
              to="/technologies"
              className="uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center font-sans"
            >
              Technologies
              <HiChevronDown
                className={`ml-1 h-4 w-4 text-black dark:text-white transition-transform duration-300 ${
                  technologiesOpen ? 'rotate-180' : ''
                }`}
              />
            </Link>
            <TechnologiesDropdown isOpen={technologiesOpen} />
          </div>

          <Link to="/portfolio" className="uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center font-sans group relative">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/blogs" className="uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center font-sans group relative">
            Blogs
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/contact" className="uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center font-sans group relative whitespace-nowrap">
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <button onClick={() => setSearchOpen(true)} className="text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200 relative group">
            <HiSearch className="h-6 w-6 animate-wiggle group-hover:animate-spin" />
          </button>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" checked={isDark} onChange={toggleTheme} />
            <div className="w-10 h-5 bg-gradient-to-r from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 rounded-full peer"></div>
            <div className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white dark:bg-gray-300 rounded-full transition-transform duration-200 ease-in-out shadow-md hover:animate-bounce ${isDark ? 'translate-x-5' : ''}`}></div>
          </label>
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden text-black dark:text-white hover:animate-wiggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <HiX className="h-8 w-8" /> : <HiMenu className="h-8 w-8" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg p-4 space-y-4 animate-slide-down">
          <Link to="/about" className="block uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200">About</Link>
          <button onClick={() => setServicesOpen(!servicesOpen)} className="block w-full text-left uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200 items-center justify-between">
            Services <HiChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {servicesOpen && <ServicesDropdown isOpen={servicesOpen} />}
          <button onClick={() => setTechnologiesOpen(!technologiesOpen)} className="block w-full text-left uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200 items-center justify-between">
            Technologies <HiChevronDown className={`h-4 w-4 transition-transform duration-300 ${technologiesOpen ? 'rotate-180' : ''}`} />
          </button>
          {technologiesOpen && <TechnologiesDropdown isOpen={technologiesOpen} />}
          <Link to="/portfolio" className="block uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200">Portfolio</Link>
          <Link to="/blogs" className="block uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200">Blogs</Link>
          <Link to="/contact" className="block uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200">Contact Us</Link>
          <button onClick={() => setSearchOpen(true)} className="block w-full text-left uppercase text-base font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200">Search</button>
          <label className="block w-full text-left uppercase text-base font-medium text-black dark:text-white">
            Theme Toggle
            <div className="mt-2">
              <input type="checkbox" className="sr-only" checked={isDark} onChange={toggleTheme} />
              <div className="w-10 h-5 bg-gradient-to-r from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 rounded-full peer"></div>
              <div className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white dark:bg-gray-300 rounded-full transition-transform duration-200 ease-in-out shadow-md hover:animate-bounce ${isDark ? 'translate-x-5' : ''}`}></div>
            </div>
          </label>
        </div>
      )}
      {/* Search Pop-up - Positioned just below navbar */}
      {searchOpen && (
        <div className="fixed left-0 right-0 top-[80px] bg-white dark:bg-gray-800 shadow-2xl p-6 z-50 animate-slide-down max-w-3xl mx-auto rounded-b-lg"> {/* Adjusted top to navbar height */}
          <button onClick={() => setSearchOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            ×
          </button>
          <h3 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">Search AUA Technologies</h3>
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent">
            <input type="text" placeholder="Enter your query..." className="w-full p-4 focus:outline-none text-black dark:text-white bg-transparent" />
            <button className="px-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              <HiSearch className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;