// src/pages/Portfolio.tsx
import { Link } from "react-router-dom";
import { Brain, Bot, BookOpen, Cpu, Smartphone, School } from "lucide-react";

const projects = [
  {
    icon: <Smartphone className="w-7 h-7 text-orange-600" />,
    title: "ZeamHealth EEG Mobile Application",
    description:
      "An AI-powered health companion integrating Neurosity Crown & Muse S headbands for real-time EEG analysis, focus tracking, and health insights.",
    tech: ["React Native", "TypeScript", "Neurosity SDK", "BLE"],
    image: "https://example.com/path-to-image/mobile-eeg-app.jpg",    // ← placeholder path
    demo: "#",
    github: "#",
  },
  {
    icon: <Brain className="w-7 h-7 text-orange-600" />,
    title: "Brain Tumor Detection (YOLOv12 + Swin Transformer)",
    description:
      "Custom deep learning model combining YOLOv12 with Swin Transformer for brain tumour detection, segmentation, and classification on BraTS dataset.",
    tech: ["PyTorch", "YOLOv12", "Swin Transformer"],
    image: "/images/portfolio/brain-tumor.jpg",
    demo: "#",
    github: "#",
  },
  {
    icon: <School className="w-7 h-7 text-orange-600" />,
    title: "Student Management Software",
    description:
      "An offline academic management system built in C++ with a clear, efficient UI and robust data handling for student records and results.",
    tech: ["C++", "File Handling", "OOP"],
    image: "/images/portfolio/student-mgmt.jpg",
    demo: "#",
    github: "#",
  },
  {
    icon: <Bot className="w-7 h-7 text-orange-600" />,
    title: "AI Chatbots (First Aid & Health Assistance)",
    description:
      "Conversational chatbots powered by RAG architecture and Hugging Face datasets — delivering intelligent, context-aware health and first-aid assistance.",
    tech: ["React", "LangChain", "Hugging Face", "Python"],
    image: "/images/portfolio/chatbots.jpg",
    demo: "#",
    github: "#",
  },
  {
    icon: <Cpu className="w-7 h-7 text-orange-600" />,
    title: "AI Agents & Automation Tools",
    description:
      "Developed LLM-powered agents to automate workflows, task planning, and personalized health tracking using OpenAI & Python APIs.",
    tech: ["OpenAI", "FastAPI", "Python", "LLM Agents"],
    image: "/images/portfolio/ai-agents.jpg",
    demo: "#",
    github: "#",
  },
  {
    icon: <BookOpen className="w-7 h-7 text-orange-600" />,
    title: "Blog Writing Chatbot with RAG",
    description:
      "An intelligent blog-generation assistant combining vector retrieval with LLMs for coherent, contextually rich content creation.",
    tech: ["React", "LangChain", "RAG", "Hugging Face"],
    image: "/images/portfolio/blog-chatbot.jpg",
    demo: "#",
    github: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-none text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A professional showcase of our most impactful software, AI, and research projects — from real-time EEG apps to custom deep-learning architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="border border-gray-200 dark:border-gray-700 hover:border-orange-600 transition-all duration-300 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg text-left p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                {proj.icon}
                <h3 className="text-xl font-bold text-blue-900 dark:text-white">
                  {proj.title}
                </h3>
              </div>

              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-44 object-cover border border-gray-200 dark:border-gray-700 mb-4"
              />

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <Link
                  to={proj.demo}
                  className="text-sm font-semibold text-orange-600 hover:underline"
                >
                  Live Demo
                </Link>
                <Link
                  to={proj.github}
                  className="text-sm font-semibold text-orange-600 hover:underline"
                >
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
            Want to Collaborate?
          </h2>
          <Link
            to="/contact"
            className="px-8 py-3 text-lg font-semibold bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
