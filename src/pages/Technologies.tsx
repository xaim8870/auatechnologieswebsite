// src/pages/Technologies.tsx
import { Link } from "react-router-dom";
import {
  FaBrain,
  FaReact,
  FaNodeJs,
  FaPython,
  FaCloud,
} from "react-icons/fa";
import { SiTypescript, SiAmazon } from "react-icons/si";

const Technologies = () => {
  const technologies = [
    {
      icon: FaReact,
      secondaryIcon: SiTypescript,
      title: "Frontend Development",
      desc: "We craft sleek, responsive, and engaging interfaces that bring your brand to life across all devices.",
      tools: [
        "React",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
      ],
    },
    {
      icon: FaNodeJs,
      secondaryIcon: FaPython,
      title: "Backend Engineering",
      desc: "Robust server-side systems engineered for performance, scalability, and reliability — the backbone of your digital ecosystem.",
      tools: [
        "Node.js",
        "Django",
        "Flask",
        "Express",
        "Spring Boot",
        "FastAPI",
      ],
    },
    {
      icon: FaBrain,
      secondaryIcon: FaPython,
      title: "AI & Machine Learning",
      desc: "Harnessing the power of data to build intelligent systems that learn, predict, and automate — from LLMs to custom vision models.",
      tools: [
        "TensorFlow",
        "PyTorch",
        "LangChain",
        "Hugging Face",
        "OpenAI API",
        "Scikit-learn",
      ],
    },
    {
      icon: FaCloud,
      secondaryIcon: SiAmazon,
      title: "DevOps & Cloud Infrastructure",
      desc: "We integrate automation and cloud services to deliver continuous deployment, efficiency, and rock-solid scalability.",
      tools: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white tracking-tight">
          Our Technology Stack
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We use cutting-edge frameworks, languages, and cloud tools to craft
          scalable, efficient, and future-proof digital products.
        </p>
      </div>

      {/* Technologies Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="group relative border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icons */}
            <div className="flex items-center space-x-4 mb-6">
              <tech.icon className="text-orange-600 text-4xl" />
              <tech.secondaryIcon className="text-blue-700 dark:text-blue-400 text-3xl opacity-70" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors">
              {tech.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {tech.desc}
            </p>

            {/* Tools */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Tools & Frameworks
              </h3>
              <ul className="flex flex-wrap gap-2">
                {tech.tools.map((tool, toolIdx) => (
                  <li
                    key={toolIdx}
                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-xs uppercase tracking-wide"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gradient Accent Line */}
            <div className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-orange-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">
          Let’s Build with the Best Tools in the Industry
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          From concept to deployment — our expertise in modern tech stacks ensures
          your product stays innovative, efficient, and scalable.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg transition-all duration-300"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  );
};

export default Technologies;
