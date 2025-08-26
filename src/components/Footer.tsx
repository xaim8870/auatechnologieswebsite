// src/components/Footer.tsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 mt-auto shadow-md">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">AUA LLC</h3>
          <p className="text-sm">Innovative solutions for your business needs.</p>
        </div>
        <div className="text-center">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-2xl">
              𝕏
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-2xl">
              in
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-2xl">
              𝘐𝘨
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} AUA LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;