// src/pages/Services.tsx
import { Link } from "react-router-dom";
import {
  FaCode,
  FaRobot,
  FaCogs,
  FaBrain,
  FaLaptopCode,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { SiKubernetes, SiTensorflow, SiPytorch } from "react-icons/si";

const Services = () => {
  const services = [
    {
      icon: FaCode,
      secondaryIcon: FaReact,
      title: "Web Development",
      desc: "Crafting fast, responsive, and future-ready web applications that align with your brand and business objectives.",
      tools: ["React", "Next.js", "Node.js", "Express", "TypeScript", "MongoDB"],
    },
    {
      icon: FaRobot,
      secondaryIcon: SiTensorflow,
      title: "Artificial Intelligence",
      desc: "Delivering intelligent solutions that leverage AI to automate workflows, optimize decisions, and scale innovation.",
      tools: ["TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Hugging Face"],
    },
    {
      icon: FaCogs,
      secondaryIcon: SiKubernetes,
      title: "DevOps & Cloud Automation",
      desc: "Implementing CI/CD pipelines and cloud architecture that ensure scalability, reliability, and seamless deployments.",
      tools: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
    },
    {
      icon: FaBrain,
      secondaryIcon: SiPytorch,
      title: "Machine Learning & Data Science",
      desc: "Building and fine-tuning ML models to extract insights, make predictions, and drive smarter business decisions.",
      tools: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Pandas"],
    },
    {
      icon: FaLaptopCode,
      secondaryIcon: FaTools,
      title: "Custom Software Solutions",
      desc: "Developing end-to-end software systems tailored to your workflows, from concept to deployment and maintenance.",
      tools: ["Python", "Java", "C#", ".NET", "Spring Boot", "Django"],
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white tracking-tight">
          Our Professional Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We merge creativity, engineering, and strategy to deliver impactful
          technology solutions across every domain.
        </p>
      </div>

      {/* Service Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="group relative border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-left p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icons */}
            <div className="flex items-center space-x-4 mb-6">
              <srv.icon className="text-orange-600 text-4xl" />
              <srv.secondaryIcon className="text-blue-700 dark:text-blue-400 text-3xl opacity-70" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors">
              {srv.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {srv.desc}
            </p>

            {/* Tools */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Technologies & Tools
              </h3>
              <ul className="flex flex-wrap gap-2">
                {srv.tools.map((tool, toolIdx) => (
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
          Let’s Build Something Exceptional
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Whether you’re an individual, a startup, or a global enterprise —
          our mission is to turn your ideas into scalable, high-performing digital products.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg transition-all duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Services;
