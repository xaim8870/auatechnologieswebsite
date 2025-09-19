// src/pages/Contact.tsx

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 italic drop-shadow-md">
            Let’s build the future of healthcare technology — together.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* CTA under form */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 italic">
            Looking for AI, Healthcare, or Full-Stack solutions? Let’s collaborate.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">
            Our Contact Details
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Reach out to us at our head office in Islamabad, Pakistan,  
            or connect through email, phone, and social media.  
            We’re always excited to collaborate and innovate.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-indigo-500" />
              <span>Islamabad, Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-indigo-500" />
              <span>info@auatechnologies.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-indigo-500" />
              <span>+92 300 1234567</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://twitter.com/YourHandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-700 transition-colors"
            >
              <Twitter />
            </a>
            <a
              href="https://linkedin.com/company/YourCompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-700 transition-colors"
            >
              <Linkedin />
            </a>
          </div>

          {/* Response Note */}
         <p className="mt-4 inline-block px-4 py-2 text-sm font-bold text-amber-800 dark:text-amber-200 bg-amber-100 dark:bg-amber-900 rounded-full italic animate-pulse shadow-md">
            ⚡ We typically respond within 3–6 hours.
        </p>


        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
