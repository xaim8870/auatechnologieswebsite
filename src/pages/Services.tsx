import { Link } from "react-router-dom";
import { FaCode, FaRobot, FaCogs, FaBrain, FaLaptopCode, FaReact, FaTools } from "react-icons/fa";
import { SiKubernetes, SiTensorflow, SiPytorch } from "react-icons/si";

const Services = () => {
  const services = [
    {
      icon: FaCode,
      secondaryIcon: FaReact,
      title: "Web Development",
      desc: "Building responsive, high-performance web applications with modern frameworks and secure, scalable backends tailored to your business needs.",
      tools: ["React", "Vue.js", "Angular", "Node.js", "Express", "Next.js"],
      color: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: FaRobot,
      secondaryIcon: SiTensorflow,
      title: "Artificial Intelligence",
      desc: "Developing intelligent solutions with custom AI models to automate processes, enhance decision-making, and drive innovation across industries.",
      tools: ["TensorFlow", "PyTorch", "Hugging Face", "OpenAI APIs", "LangChain"],
      color: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: FaCogs,
      secondaryIcon: SiKubernetes,
      title: "DevOps & Automation",
      desc: "Streamlining development with CI/CD pipelines, cloud infrastructure, and automated testing to ensure scalability and reliability.",
      tools: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins"],
      color: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: FaBrain,
      secondaryIcon: SiPytorch,
      title: "Machine Learning Model Training",
      desc: "Fine-tuning and deploying machine learning models for optimal performance, leveraging advanced frameworks to solve complex problems.",
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
      color: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: FaLaptopCode,
      secondaryIcon: FaTools,
      title: "Custom Software Development",
      desc: "Delivering end-to-end software solutions with secure, scalable, and maintainable architectures to meet your unique requirements.",
      tools: ["Java", "Python", "C#", ".NET", "Spring Boot", "Ruby on Rails"],
      color: "text-blue-600 dark:text-blue-300",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 md:px-12">
      {/* Page Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-900 dark:text-blue-300 font-['Inter'] tracking-tight">
          Our Comprehensive Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We deliver innovative, scalable, and tailored solutions to empower your business with cutting-edge technology and expertise.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-105 "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="flex items-center space-x-4">
              <srv.icon className={`${srv.color} text-4xl`} />
              <srv.secondaryIcon className={`${srv.color} text-3xl opacity-60`} />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-blue-900 dark:text-blue-300">
              {srv.title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {srv.desc}
            </p>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">Technologies</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {srv.tools.map((tool, toolIdx) => (
                  <li
                    key={toolIdx}
                    className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-6">
          Transform Your Business Today
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Partner with us to unlock the full potential of your ideas with our expert services and innovative solutions.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 rounded-full bg-orange-600 text-white font-semibold text-lg shadow-lg hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 transition-all duration-300"
        >
          Connect With Us
        </Link>
      </div>
    </div>
  );
};

export default Services;