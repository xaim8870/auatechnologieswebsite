// src/pages/Portfolio.tsx
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Brain Tumor Detection (YOLOv12 + Swin)",
    description:
      "A deep learning project for brain tumor detection using YOLOv12 with Swin Transformer backbone.",
    tech: ["PyTorch", "YOLOv12", "Swin Transformer"],
    image: "/images/portfolio/brain-tumor.jpg", // placeholder path
    demo: "#",
    github: "#",
  },
  {
    title: "Blog Writing Chatbot with RAG",
    description:
      "An AI-powered chatbot that generates blogs using Retrieval-Augmented Generation (RAG).",
    tech: ["React", "LangChain", "Hugging Face"],
    image: "/images/portfolio/chatbot.jpg",
    demo: "#",
    github: "#",
  },
  {
    title: "Sign Language Detection",
    description:
      "Recognized ABC hand gestures using Python, OpenCV, and TensorFlow.",
    tech: ["TensorFlow", "OpenCV"],
    image: "/images/portfolio/sign-lang.jpg",
    demo: "#",
    github: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          My Portfolio
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A showcase of projects I’ve built — from AI/ML research to frontend
          development.
        </p>

        {/* Grid of Projects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link
                    to={proj.demo}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </Link>
                  <Link
                    to={proj.github}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Want to collaborate?
          </h2>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
