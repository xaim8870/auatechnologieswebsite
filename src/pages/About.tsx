import { motion } from "framer-motion";
import { FaHospitalUser, FaBrain, FaLaptopCode, FaUsers, FaGlobeAsia } from "react-icons/fa";
import UsamaPic from "../assets/images/Usama Jabar.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Tech World"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-blue-900/70"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg">
            About AUA Technologies
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 italic drop-shadow-md">
            “We serve humanity with the best engineering.”
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-blue-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              <span className="font-semibold">AUA Technologies</span>, headquartered in 
              <span className="font-semibold"> Islamabad, Pakistan</span>, is a rising software startup 
              with global ambitions. We specialize in 
              <span className="font-semibold"> healthcare applications, medical tech, AI & Machine Learning,</span> 
              and full-stack solutions. Our startup spirit, long-term client partnerships, 
              and focus on innovation set us apart as a trusted technology partner.
            </p>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li className="flex items-center gap-3">
                <FaHospitalUser className="text-orange-600" /> Medical & Healthcare Focus
              </li>
              <li className="flex items-center gap-3">
                <FaBrain className="text-orange-600" /> AI & Machine Learning Innovation
              </li>
              <li className="flex items-center gap-3">
                <FaLaptopCode className="text-orange-600" /> Full-Stack Engineering Excellence
              </li>
              <li className="flex items-center gap-3">
                <FaUsers className="text-orange-600" /> Long-Term Client Partnerships
              </li>
              <li className="flex items-center gap-3">
                <FaGlobeAsia className="text-orange-600" /> Head Office: Islamabad, Pakistan
              </li>
            </ul>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            alt="Our Team"
            className="rounded-2xl shadow-2xl border-4 border-indigo-500/40"
          />
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-t-4 border-orange-600"
          >
            <h3 className="text-2xl font-bold mb-3 text-blue-900">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To revolutionize healthcare with intelligent, accessible, and user-friendly applications 
              that empower patients, doctors, and institutions worldwide.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-t-4 border-orange-600"
          >
            <h3 className="text-2xl font-bold mb-3 text-blue-900">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To be a global leader in medical technology innovation, 
              where software and AI seamlessly merge to serve humanity and create healthier societies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-gray-950 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-blue-900">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Usama Jabar",
                role: "Co-Founder & Visionary",
                img: UsamaPic,
              },
              {
                name: "Syed Asshhad Abrar",
                role: "Co-Founder & CTO",
                img: "https://randomuser.me/api/portraits/men/45.jpg",
              },
              {
                name: "Abdul Ahad Shan",
                role: "Co-Founder & COO",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
            ].map((founder, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-40 h-40 rounded-full bg-gray-300 dark:bg-gray-700 shadow-lg mb-6 overflow-hidden border-4 border-blue-900/40">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {founder.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{founder.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-indigo-600 via-blue-700 to-purple-700 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Why Choose AUA Technologies?</h2>
          <p className="text-lg leading-relaxed">
            With a team of passionate engineers, data scientists, and innovators, 
            we deliver reliable, scalable, and impactful solutions.  
            We don’t just write code — we build solutions that matter to humanity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
