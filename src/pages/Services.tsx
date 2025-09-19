// src/pages/Services.tsx
import { FaCode, FaRobot, FaCogs, FaBrain, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      desc: "Crafting responsive apps with React, Vue, Angular, and robust backends.",
      color: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: FaRobot,
      title: "AI",
      desc: "Automate and innovate with custom AI models for your industry.",
      color: "text-purple-600 dark:text-purple-300",
    },
    {
      icon: FaCogs,
      title: "DevOps",
      desc: "CI/CD pipelines, cloud management, and automated testing for scalability.",
      color: "text-green-600 dark:text-green-300",
    },
    {
      icon: FaBrain,
      title: "Model Training",
      desc: "Fine-tune ML models with TensorFlow and PyTorch for peak performance.",
      color: "text-pink-600 dark:text-pink-300",
    },
    {
      icon: FaLaptopCode,
      title: "Software Development",
      desc: "End-to-end solutions with secure, scalable architectures.",
      color: "text-indigo-600 dark:text-indigo-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-16 px-6">
      {/* Page Heading */}
      <h1 className="text-4xl font-extrabold text-center text-blue-700 dark:text-purple-400 mb-12 font-['Poppins']">
        Our Services
      </h1>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8 flex flex-col items-start transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <srv.icon className={`${srv.color} text-5xl mb-4`} />
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              {srv.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{srv.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Ready to take your business to the next level?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Let’s work together and build scalable, innovative solutions for your needs.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Services;
