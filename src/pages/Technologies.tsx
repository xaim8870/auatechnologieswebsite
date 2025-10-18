import { Link } from "react-router-dom";
import { FaBrain, FaReact, FaNodeJs, FaPython, FaCloud } from "react-icons/fa";
import { SiTypescript, SiAmazon } from "react-icons/si";

const Technologies = () => {
  const technologies = [
    {
      icon: FaReact,
      secondaryIcon: SiTypescript,
      title: "Frontend Development",
      desc: "Crafting dynamic and responsive user interfaces with modern frameworks and tools for seamless user experiences across devices.",
      tools: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: FaNodeJs,
      secondaryIcon: FaPython,
      title: "Backend Development",
      desc: "Building robust and scalable server-side solutions with high-performance frameworks to power your applications.",
      tools: ["Node.js", "Django", "Flask", "Express", "Spring Boot", "Ruby on Rails"],
      color: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: FaBrain,
      secondaryIcon: FaPython,
      title: "AI & Machine Learning",
      desc: "Leveraging cutting-edge AI/ML frameworks to deliver intelligent, data-driven solutions for complex challenges.",
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI APIs", "LangChain"],
      color: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: FaCloud,
      secondaryIcon: SiAmazon,
      title: "DevOps & Cloud Infrastructure",
      desc: "Streamlining development and deployment with cloud-native technologies and automation for maximum efficiency.",
      tools: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      color: "text-blue-600 dark:text-blue-300",
    },
  ];

  return (
    <div className="min-h-screen  py-20 px-6 md:px-12">
      {/* Page Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-900 dark:text-blue-300 font-['Inter'] tracking-tight">
          Cutting-Edge Technologies
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We harness the power of modern tools and frameworks to deliver innovative, scalable, and high-performance solutions tailored to your needs.
        </p>
      </div>

      {/* Tech Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="flex items-center space-x-4">
              <tech.icon className={`${tech.color} text-4xl`} />
              <tech.secondaryIcon className={`${tech.color} text-3xl opacity-60`} />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-blue-900 dark:text-blue-300">
              {tech.title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {tech.desc}
            </p>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">Tools & Frameworks</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {tech.tools.map((tool, toolIdx) => (
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
          Ready to Build Something Extraordinary?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Partner with us to transform your vision into reality using the most advanced technology stacks and innovative solutions.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 rounded-full bg-blue-900 text-white font-semibold text-lg shadow-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300"
        >
          Start Your Project Today
        </Link>
      </div>
    </div>
  );
};

export default Technologies;