// src/components/Footer.tsx
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-700 pt-16 pb-10 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 🏢 Company Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-900 mb-4 tracking-tight">
            AUA <span className="text-orange-600">Technologies</span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            We craft intelligent, secure, and scalable software & AI solutions
            that empower businesses and improve lives worldwide.
          </p>

          <div className="flex space-x-3 mt-4">
            {[
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
              { icon: <FaFacebookF />, link: "https://facebook.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-gray-300 hover:border-orange-600 hover:bg-orange-600 transition-all duration-300"
              >
                <div className="text-gray-700 hover:text-white text-sm">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4 border-l-4 border-orange-600 pl-3 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              
              { name: "Services", to: "/services" },
              { name: "Portfolio", to: "/portfolio" },
              { name: "Blogs", to: "/blogs" },
              { name: "About Us", to: "/about" },
              { name: "Contact", to: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="hover:text-orange-600 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 💼 Services */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4 border-l-4 border-orange-600 pl-3 uppercase tracking-wide">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Custom Web & App Development</li>
            <li>AI & Machine Learning Solutions</li>
            <li>Cloud & DevOps</li>
            <li>Full-Stack Product Development</li>
            <li>Technical Consultation</li>
          </ul>
        </div>

        {/* 📬 Contact */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4 border-l-4 border-orange-600 pl-3 uppercase tracking-wide">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-orange-600" />
              <span>info@auatechnologies.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-orange-600" />
              <span>+92 3001058870</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span>Islamabad, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-16 pt-8 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-600 font-semibold">
            AUA Technologies
          </span>{" "}
          — All Rights Reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Designed & Developed with ❤️ by the AUA Engineering Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
