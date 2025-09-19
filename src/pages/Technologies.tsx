// src/pages/Technologies.tsx
import { Link } from "react-router-dom";
import { FaCode, FaLaptopCode, FaBrain, FaCogs } from "react-icons/fa";

const Technologies = () => {
  const technologies = [
    {
      icon: FaCode,
      title: "Frontend Stacks",
      desc: "React, Vue.js, Angular, Tailwind CSS, TypeScript",
      color: "text-purple-600 dark:text-purple-300",
    },
    {
      icon: FaLaptopCode,
      title: "Backend Stacks",
      desc: "Node.js, Django, Flask, Express, Spring Boot",
      color: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: FaBrain,
      title: "AI/ML Tools",
      desc: "TensorFlow, PyTorch, Scikit-learn, Hugging Face, OpenAI APIs",
      color: "text-pink-600 dark:text-pink-300",
    },
    {
      icon: FaCogs,
      title: "DevOps & Cloud",
      desc: "AWS, Azure, GCP, Docker, Kubernetes, Jenkins",
      color: "text-green-600 dark:text-green-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black py-16 px-6">
      {/* Page Heading */}
      <h1 className="text-4xl font-extrabold text-center text-purple-700 dark:text-blue-400 mb-12 font-['Poppins']">
        Our Technologies
      </h1>

      {/* Tech Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8 flex flex-col items-start transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <tech.icon className={`${tech.color} text-5xl mb-4`} />
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              {tech.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{tech.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Want to collaborate with us?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Let’s turn your ideas into reality with the right technology stack.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Technologies;
