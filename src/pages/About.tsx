// src/pages/About.tsx
import { motion } from "framer-motion";
import {
  FaHospitalUser,
  FaBrain,
  FaLaptopCode,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* 🌐 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Tech Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-indigo-900/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl">
            About <span className="text-orange-500">AUA Technologies</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 italic">
            “We serve humanity with the best engineering.”
          </p>
        </motion.div>
      </section>

      {/* 🏢 COMPANY OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-300 mb-6">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              <span className="font-semibold">AUA Technologies</span>, based in{" "}
              <span className="font-semibold">Islamabad, Pakistan</span>, is a
              forward-thinking software startup shaping the future of{" "}
              <span className="font-semibold">
                Healthcare, Artificial Intelligence, and Full-Stack Engineering
              </span>
              . Our mission-driven team builds technology that enhances human
              life through intelligent design and innovation.
            </p>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li className="flex items-center gap-3">
                <FaHospitalUser className="text-orange-600" /> Medical & Health
                Tech Focus
              </li>
              <li className="flex items-center gap-3">
                <FaBrain className="text-orange-600" /> AI & Machine Learning
                Solutions
              </li>
              <li className="flex items-center gap-3">
                <FaLaptopCode className="text-orange-600" /> Full-Stack Software
                Development
              </li>
              <li className="flex items-center gap-3">
                <FaUsers className="text-orange-600" /> Long-Term Global
                Partnerships
              </li>
              <li className="flex items-center gap-3">
                <FaGlobeAsia className="text-orange-600" /> Head Office:
                Islamabad, Pakistan
              </li>
            </ul>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Team Collaboration"
            className="rounded-2xl shadow-2xl border-4 border-blue-900/30"
          />
        </div>
      </section>

      {/* 🎯 MISSION & VISION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Our Mission",
              text: "To revolutionize healthcare with intelligent, accessible, and user-friendly applications that empower patients, doctors, and institutions globally.",
            },
            {
              title: "Our Vision",
              text: "To become a global leader in healthcare innovation, where AI and software engineering converge to create a healthier, smarter, and more connected world.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-10 border-l-4 border-orange-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 text-blue-900 dark:text-blue-300">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

     
     

      {/* 💡 WHY CHOOSE US */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">
            Why Choose AUA Technologies?
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            We are not just engineers — we are innovators driven by purpose.  
            Our solutions are built on precision, compassion, and the belief that  
            technology can truly make lives better.  
            <br />
            <span className="text-orange-400 font-semibold">
              We don’t just write code — we build impact.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
